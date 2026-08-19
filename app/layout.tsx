import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: "Triple IA Consultores | Innovación, oportunidades y tecnología",
    description:
      "Conectamos oportunidades de financiamiento, innovación, investigación aplicada y tecnología para desarrollar proyectos con impacto.",
    icons: {
      icon: "/assets/brand/LOGO_global.svg",
      shortcut: "/assets/brand/LOGO_global.svg",
    },
    openGraph: {
      title: "Triple IA Consultores",
      description:
        "Oportunidades, innovación y tecnología para hacer crecer proyectos.",
      type: "website",
      locale: "es_PE",
      images: [{ url: socialImage, width: 1734, height: 908, alt: "Triple IA Consultores" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Triple IA Consultores",
      description:
        "Oportunidades, innovación y tecnología para hacer crecer proyectos.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
