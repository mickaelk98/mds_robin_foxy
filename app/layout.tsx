import type { Metadata } from "next";
import GoogleAnalytics from "@/app/components/analytics";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/app/components/auth-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foxy et Robin",
  icons: "/logo.svg",
  description:
    "Un livre essentiel pour sensibiliser les enfants et des guide pour aider les parents et enseigants face aux danger du numérique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={` ${geistSans.variable} ${geistMono.variable} bg-[var(--background)]`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
