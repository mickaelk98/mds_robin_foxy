import { RegisterMobileForm } from "@/app/components/register-mobile-form";
import { RegisterDesktopForm } from "@/app/components/register-desktop-form";
import { Header } from "@/app/components/header"
import { SelectProfil } from "@/app/components/select-profil"
import { SignuptWave } from "@/app/components/wave/signup-wave"
import { Footer } from "@/app/components/footer"


export default function Signup() {
    return (
        <>
            <div className="bg-[var(--orange-500)]">
                <Header />
                <SelectProfil />
                <SignuptWave />
                <div className="bg-[var(--orange-100)] py-20 -mt-2 md:-mt-4 -z-50">
                    <RegisterMobileForm />
                    <RegisterDesktopForm />
                </div>
            </div>
            <Footer />
        </>
    );
}