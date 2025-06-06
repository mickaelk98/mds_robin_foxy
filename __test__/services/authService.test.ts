import { describe, it, expect, vi, beforeEach } from "vitest";
import { authService } from "../../app/services/auth";
import { account, databases } from "../../app/lib/appwrite";
import { UserType } from "../../app/interfaces/user";
import type { RegularUser } from "../../app/interfaces/user";

vi.mock("../../app/lib/appwrite", () => {
    const accountMock = {
        create: vi.fn(),
        createEmailPasswordSession: vi.fn(),
        get: vi.fn(),
        deleteSession: vi.fn(),
    };

    const databasesMock = {
        createDocument: vi.fn(),
        listDocuments: vi.fn(),
    };

    return {
        account: accountMock,
        databases: databasesMock,
        ID: { unique: () => "mocked-id" },
        Query: {
            equal: vi.fn((field: string, value: string) => `${field}==${value}`),
        },
    };
});

// Cast les mocks une seule fois pour éviter les `as any`
const mockedAccount = account as unknown as {
    create: ReturnType<typeof vi.fn>;
    createEmailPasswordSession: ReturnType<typeof vi.fn>;
    get: ReturnType<typeof vi.fn>;
    deleteSession: ReturnType<typeof vi.fn>;
};

const mockedDatabases = databases as unknown as {
    createDocument: ReturnType<typeof vi.fn>;
    listDocuments: ReturnType<typeof vi.fn>;
};

describe("authService", () => {
    const registerData = {
        lastname: "Doe",
        firstname: "John",
        pseudo: "johndoe",
        email: "john@example.com",
        password: "Strong@1A",
        type: UserType.USER,
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("register - crée un compte et un document utilisateur", async () => {
        mockedAccount.create.mockResolvedValue({ $id: "acc123" });
        mockedDatabases.createDocument.mockResolvedValue({
            ...registerData,
            accountId: "acc123",
            isAdmin: false,
            $id: "doc123",
            $collectionId: "users",
            $databaseId: "main",
            $createdAt: new Date().toISOString(),
            $updatedAt: new Date().toISOString(),
            $permissions: [],
        });

        const result = await authService.register(registerData);
        expect(mockedAccount.create).toHaveBeenCalled();
        expect(mockedDatabases.createDocument).toHaveBeenCalled();
        expect(result.accountId).toBe("acc123");
    });

    it("login - retourne un utilisateur existant", async () => {
        const mockUser: RegularUser = {
            ...registerData,
            accountId: "acc123",
            isAdmin: false,
            $id: "doc123",
            $collectionId: "users",
            $databaseId: "main",
            $createdAt: new Date().toISOString(),
            $updatedAt: new Date().toISOString(),
            $permissions: [],
            type: UserType.USER,
        };

        mockedAccount.createEmailPasswordSession.mockResolvedValue({});
        mockedAccount.get.mockResolvedValue({ $id: "acc123" });
        mockedDatabases.listDocuments.mockResolvedValue({
            documents: [mockUser],
        });

        const result = await authService.login({
            email: "john@example.com",
            password: "Strong@1A",
        });

        expect(mockedAccount.createEmailPasswordSession).toHaveBeenCalled();
        expect(mockedAccount.get).toHaveBeenCalled();
        expect(mockedDatabases.listDocuments).toHaveBeenCalled();

        // Vérifier que le résultat est un User et non une LoginErrorMessage
        if ('accountId' in result) {
            expect(result.accountId).toBe("acc123");
        } else {
            expect(result).toBeDefined();
            expect('accountId' in result).toBe(true);
        }
    });

    it("logout - supprime la session actuelle", async () => {
        mockedAccount.deleteSession.mockResolvedValue({});
        await authService.logout();
        expect(mockedAccount.deleteSession).toHaveBeenCalledWith("current");
    });
});
