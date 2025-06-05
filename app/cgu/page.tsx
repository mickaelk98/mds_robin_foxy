"use client";

import { useState } from "react";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Section {
    id: string;
    title: string;
    content: string[];
}

const sections: Section[] = [
    {
        id: "objet",
        title: "1. OBJET",
        content: [
            "Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;utilisation de la plateforme FoxyRobin accessible à l&apos;adresse foxyrobin.fr, développée dans le cadre d&apos;un projet éducatif visant à sensibiliser et aider à lutter contre les dangers d&apos;Internet et des réseaux sociaux."
        ]
    },
    {
        id: "presentation",
        title: "2. PRÉSENTATION DU SERVICE",
        content: [
            "Notre plateforme propose :",
            "• Un système d&apos;authentification sécurisé",
            "• Un système de messagerie entre utilisateurs",
            "• Des chatbox de discussion",
            "• Une carte interactive de France par région avec localisation de boutiques",
            "• Des contenus éducatifs sur la sécurité numérique"
        ]
    },
    {
        id: "acceptation",
        title: "3. ACCEPTATION DES CONDITIONS",
        content: [
            "L&apos;utilisation de notre plateforme implique l&apos;acceptation pleine et entière des présentes CGU. Si vous n&apos;acceptez pas ces conditions, vous ne devez pas utiliser notre service."
        ]
    },
    {
        id: "inscription",
        title: "4. INSCRIPTION ET COMPTE UTILISATEUR",
        content: [
            "4.1 Conditions d&apos;inscription",
            "• L&apos;inscription est gratuite et ouverte à toute personne physique majeure",
            "• Les mineurs doivent obtenir l&apos;autorisation de leurs représentants légaux",
            "• Les informations fournies lors de l&apos;inscription doivent être exactes et à jour",
            "",
            "4.2 Responsabilité du compte",
            "• Vous êtes responsable de la confidentialité de vos identifiants",
            "• Vous vous engagez à nous informer immédiatement de toute utilisation non autorisée",
            "• Un seul compte par personne est autorisé"
        ]
    },
    {
        id: "utilisation",
        title: "5. UTILISATION DU SERVICE",
        content: [
            "5.1 Usage autorisé",
            "Notre plateforme doit être utilisée conformément à sa vocation éducative et préventive. Les utilisateurs s&apos;engagent à :",
            "• Respecter les autres utilisateurs",
            "• Ne pas diffuser de contenu illégal, offensant ou inapproprié",
            "• Ne pas utiliser le service à des fins commerciales non autorisées",
            "• Contribuer positivement à la communauté",
            "",
            "5.2 Interdictions",
            "Il est strictement interdit de :",
            "• Publier des contenus à caractère haineux, discriminatoire ou violent",
            "• Harceler ou intimider d&apos;autres utilisateurs",
            "• Diffuser des informations personnelles d&apos;autrui sans autorisation",
            "• Tenter de contourner les mesures de sécurité",
            "• Utiliser des robots ou scripts automatisés",
            "• Créer de faux comptes ou usurper l&apos;identité d&apos;autrui"
        ]
    },
    {
        id: "messagerie",
        title: "6. SYSTÈME DE MESSAGERIE ET CHATBOX",
        content: [
            "6.1 Utilisation responsable",
            "• Les communications doivent rester respectueuses et bienveillantes",
            "• Le système de messagerie ne doit pas être utilisé pour du harcèlement",
            "• Nous nous réservons le droit de modérer les conversations",
            "",
            "6.2 Confidentialité des messages",
            "• Vos messages privés ne sont pas lus par nos équipes sauf signalement",
            "• Nous nous réservons le droit d&apos;intervenir en cas de comportement abusif",
            "• Les messages peuvent être conservés pour des raisons de sécurité"
        ]
    },
    {
        id: "carte",
        title: "7. CARTE INTERACTIVE ET DONNÉES DE LOCALISATION",
        content: [
            "7.1 Utilisation des données",
            "• Les informations de localisation des boutiques sont fournies à titre informatif",
            "• Nous ne garantissons pas l&apos;exactitude de ces informations",
            "• Les utilisateurs sont invités à vérifier les informations avant tout déplacement",
            "",
            "7.2 Responsabilité",
            "• Nous ne sommes pas responsables des services fournis par les boutiques référencées",
            "• Les transactions éventuelles se font directement entre l&apos;utilisateur et la boutique"
        ]
    },
    {
        id: "propriete",
        title: "8. PROPRIÉTÉ INTELLECTUELLE",
        content: [
            "8.1 Contenu de la plateforme",
            "• Tous les contenus de la plateforme sont protégés par le droit d&apos;auteur",
            "• Toute reproduction sans autorisation est interdite",
            "• Les logos et marques sont la propriété de leurs détenteurs respectifs",
            "",
            "8.2 Contenu utilisateur",
            "• Vous conservez la propriété de vos contenus",
            "• Vous accordez une licence d&apos;utilisation pour l&apos;affichage sur la plateforme",
            "• Nous pouvons supprimer tout contenu non conforme"
        ]
    },
    {
        id: "protection",
        title: "9. PROTECTION DES DONNÉES PERSONNELLES",
        content: [
            "Conformément au RGPD, nous nous engageons à :",
            "• Protéger vos données personnelles",
            "• Ne pas les vendre à des tiers",
            "• Vous permettre d&apos;exercer vos droits (accès, rectification, suppression)",
            "• Ne collecter que les données nécessaires au fonctionnement du service"
        ]
    },
    {
        id: "moderation",
        title: "10. MODÉRATION ET SANCTIONS",
        content: [
            "10.1 Modération",
            "• Nous nous réservons le droit de modérer tous les contenus",
            "• Les signalements d&apos;utilisateurs sont traités dans les meilleurs délais",
            "• Nous pouvons supprimer tout contenu non conforme",
            "",
            "10.2 Sanctions",
            "En cas de non-respect des présentes CGU :",
            "• Avertissement",
            "• Suspension temporaire du compte",
            "• Suspension définitive du compte",
            "• Poursuites judiciaires si nécessaire"
        ]
    },
    {
        id: "responsabilite",
        title: "11. RESPONSABILITÉ ET GARANTIES",
        content: [
            "11.1 Limitation de responsabilité",
            "• Le service est fourni &quot;en l&apos;état&quot;",
            "• Nous ne garantissons pas l&apos;absence d&apos;interruptions",
            "• Nous ne sommes pas responsables des dommages indirects",
            "• Notre responsabilité est limitée au cadre légal applicable",
            "",
            "11.2 Disponibilité du service",
            "• Nous nous efforçons d&apos;assurer une disponibilité maximale",
            "• Des maintenances peuvent interrompre temporairement le service",
            "• Nous ne garantissons pas une disponibilité de 100%"
        ]
    },
    {
        id: "modification",
        title: "12. MODIFICATION DES CGU",
        content: [
            "• Nous nous réservons le droit de modifier ces CGU à tout moment",
            "• Les modifications seront notifiées aux utilisateurs",
            "• La poursuite de l&apos;utilisation vaut acceptation des nouvelles conditions"
        ]
    },
    {
        id: "resiliation",
        title: "13. RÉSILIATION",
        content: [
            "13.1 Résiliation par l&apos;utilisateur",
            "• Vous pouvez supprimer votre compte à tout moment",
            "• La suppression entraîne la perte définitive de vos données",
            "",
            "13.2 Résiliation par nos soins",
            "• Nous pouvons résilier un compte en cas de violation des CGU",
            "• Un préavis sera donné sauf cas de violation grave"
        ]
    },
    {
        id: "droit",
        title: "14. DROIT APPLICABLE ET JURIDICTION",
        content: [
            "• Les présentes CGU sont régies par le droit français",
            "• Tout litige sera soumis aux tribunaux français compétents",
            "• Une médiation peut être tentée avant toute action judiciaire"
        ]
    },
    {
        id: "contact",
        title: "15. CONTACT",
        content: [
            "Pour toute question concernant ces CGU :",
            "Email : contact@foxyrobin.fr",
            "Adresse : 123 rue de l&apos;Innovation, 75000 Paris"
        ]
    }
];

export default function CGUPage() {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

    const toggleSection = (sectionId: string) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Header />

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-white p-4 rounded-lg shadow">
                    CONDITIONS GÉNÉRALES D&apos;UTILISATION (CGU)
                </h1>

                <p className="text-center text-gray-600 mb-8">
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>

                <div className="space-y-4">
                    {sections.map((section) => (
                        <div key={section.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <h2 className="text-xl font-semibold">{section.title}</h2>
                                {openSections[section.id] ? (
                                    <ChevronUp className="h-6 w-6" />
                                ) : (
                                    <ChevronDown className="h-6 w-6" />
                                )}
                            </button>

                            {openSections[section.id] && (
                                <div className="px-6 py-4 border-t">
                                    {section.content.map((paragraph, index) => (
                                        <p key={index} className="mb-4 last:mb-0 text-gray-700">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-[var(--blue-200)] text-white hover:bg-[var(--blue-300)]"
                    >
                        Retour en haut
                    </Button>
                </div>
            </main>

            <Footer />
        </div>
    );
}