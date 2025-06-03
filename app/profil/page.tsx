'use client';

import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/app/components/ui/dialog';
import { Input } from '@/app/components/ui/input';
import { useAuthStore } from '@/app/lib/stores/auth-store';
import type { User } from '@/app/interfaces/user';
import { useRouter } from 'next/navigation';

export default function Profil() {
    const { setUser, logout } = useAuthStore();
    const user = useAuthStore((state) => state.user);
    const [editMode, setEditMode] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [form, setForm] = useState<User | null>(user);
    const router = useRouter();

    // Déconnexion
    const handleLogout = async () => {
        logout();
        router.push('/login');
    };

    // Suppression du compte
    const handleDelete = async () => {
        setShowDeleteDialog(false);
        // TODO: Appwrite delete user + suppression côté base
        logout();
        router.push('/signup');
    };

    // Modification du profil
    const handleEdit = () => setEditMode(true);

    const handleSave = async () => {
        if (form) {
            console.log("les donnée du form:", form);
            setUser(form);
            setEditMode(false);
            // TODO: Appwrite update user
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-2 py-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-[var(--primary)] tracking-tight">
                Mon profil
            </h1>
            <div className="custom-gradient-border rounded-[2.5rem] p-1 shadow-lg">
                <div className="bg-card rounded-[2rem] p-8 sm:p-10 shadow-inner flex flex-col gap-8">
                    {!editMode ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-sm text-muted-foreground">Prénom</p>
                                    <p className="font-semibold text-lg">{user?.firstname}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Nom</p>
                                    <p className="font-semibold text-lg">{user?.lastname}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Pseudo</p>
                                    <p className="font-semibold text-lg">{user?.pseudo}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-semibold text-lg">{user?.email}</p>
                                </div>
                                {user?.phone && (
                                    <div>
                                        <p className="text-sm text-muted-foreground">Téléphone</p>
                                        <p className="font-semibold text-lg">{user?.phone}</p>
                                    </div>
                                )}
                                {user?.type === 'professional' && 'profession' in user && (
                                    <div>
                                        <p className="text-sm text-muted-foreground">Profession</p>
                                        <p className="font-semibold text-lg">{user.profession}</p>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <Button variant="outline" onClick={handleEdit} className="flex-1 border-[1.5px] border-[var(--primary)] hover:bg-[var(--orange-100)] transition-colors">
                                    Modifier
                                </Button>
                                <Button variant="destructive" onClick={() => setShowDeleteDialog(true)} className="flex-1 shadow-md">
                                    Supprimer
                                </Button>
                                <Button variant="secondary" onClick={handleLogout} className="flex-1 shadow-md">
                                    Déconnexion
                                </Button>
                            </div>
                        </>
                    ) : (
                        <form
                            className="space-y-6"
                            onSubmit={e => {
                                e.preventDefault();
                                handleSave();
                            }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm mb-1 text-muted-foreground" htmlFor="firstname">Prénom</label>
                                    <Input
                                        id="firstname"
                                        value={form?.firstname || ''}
                                        onChange={e => setForm({ ...form!, firstname: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1 text-muted-foreground" htmlFor="lastname">Nom</label>
                                    <Input
                                        id="lastname"
                                        value={form?.lastname || ''}
                                        onChange={e => setForm({ ...form!, lastname: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1 text-muted-foreground" htmlFor="pseudo">Pseudo</label>
                                    <Input
                                        id="pseudo"
                                        value={form?.pseudo || ''}
                                        onChange={e => setForm({ ...form!, pseudo: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-1 text-muted-foreground" htmlFor="email">Email</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={form?.email || ''}
                                        onChange={e => setForm({ ...form!, email: e.target.value })}
                                        required
                                    />
                                </div>
                                {form?.phone !== undefined && (
                                    <div>
                                        <label className="block text-sm mb-1 text-muted-foreground" htmlFor="phone">Téléphone</label>
                                        <Input
                                            id="phone"
                                            value={form?.phone || ''}
                                            onChange={e => setForm({ ...form!, phone: e.target.value })}
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm mb-1 text-muted-foreground" htmlFor="password">Mot de passe</label>
                                    <Input
                                        type='password'
                                        id="password"
                                        value={form?.password || ''}
                                        onChange={e => setForm({ ...form!, password: e.target.value })}
                                    />
                                </div>

                                {form?.type === 'professional' && 'profession' in form && (
                                    <div>
                                        <label className="block text-sm mb-1 text-muted-foreground" htmlFor="profession">Profession</label>
                                        <Input
                                            id="profession"
                                            value={form.profession || ''}
                                            onChange={e => setForm({ ...form, profession: e.target.value })}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-3 pt-2">
                                <Button type="submit" className="flex-1 bg-[var(--primary)] text-white shadow-md hover:bg-[var(--orange-200)] transition-colors">
                                    Enregistrer
                                </Button>
                                <Button type="button" variant="secondary" onClick={() => setEditMode(false)} className="flex-1 shadow-md">
                                    Annuler
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {/* Dialog de confirmation suppression */}
            <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogContent className="rounded-[2rem] p-8 shadow-xl border-0 bg-card">
                    <DialogHeader>
                        <DialogTitle className="text-[var(--destructive)] text-2xl">Supprimer le compte</DialogTitle>
                    </DialogHeader>
                    <p className="text-muted-foreground mb-6">
                        Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.
                    </p>
                    <DialogFooter className="flex flex-row gap-3 justify-end">
                        <Button variant="destructive" onClick={handleDelete} className="shadow-md">
                            Oui, supprimer
                        </Button>
                        <Button variant="secondary" onClick={() => setShowDeleteDialog(false)} className="shadow-md">
                            Annuler
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
