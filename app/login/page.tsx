import { LoginForm } from "@/app/components/login-form";
import { Header } from "@/app/components/header"
import { Footer } from "@/app/components/footer"
import { SignuptWave } from "@/app/components/wave/signup-wave"

export default function Login() {
    return (
        <>
            <div className="bg-[var(--orange-500)]">
                <Header />
                <SignuptWave />
                <div className="bg-[var(--orange-100)] min-h-[100vh] py-20 -mt-2 md:-mt-4 -z-50 flex items-center justify-center">
                    <LoginForm />
                </div>
            </div>
            <Footer />
        </>
    );
}