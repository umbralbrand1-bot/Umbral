import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Umbral — AI Automation Studio",
    template: "%s | Umbral",
  },
  description:
    "Agentes de IA que eliminan el trabajo repetitivo. Recupera 40+ horas al mes en ventas, operaciones y atención al cliente.",
  metadataBase: new URL("https://umbral.studio"),
  keywords: [
    "agencia automatización IA",
    "agentes de IA para empresas",
    "automatizar WhatsApp con IA",
    "consultor IA pymes",
    "implementar IA en mi negocio",
    "automatización n8n Make",
    "AI automation studio",
  ],
  authors: [{ name: "Umbral" }],
  creator: "Umbral",
  icons: {
    icon: [{ url: "/umbral-favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Umbral — AI Automation Studio",
    description: "Cruza el umbral hacia la automatización con IA.",
    type: "website",
    locale: "es_419",
    url: "https://umbral.studio",
    siteName: "Umbral",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Umbral — AI Automation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umbral — AI Automation Studio",
    description: "Cruza el umbral hacia la automatización con IA.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#05070C",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Umbral",
  url: "https://umbral.studio",
  description:
    "AI Automation Studio que diseña e implementa agentes y automatizaciones para pymes de habla hispana.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "umbralbrand1@gmail.com",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-umbral-bg text-slate-50 antialiased">{children}</body>
    </html>
  );
}
