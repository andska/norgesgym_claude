import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://norgesgym.no"),
  title: "Norgesgym | Døgnåpent treningssenter i Moss",
  description:
    "Døgnåpent treningssenter på Solgaard Skog i Moss. 429 kr i måneden, ingen bindingstid og gratis parkering. Tren når det passer deg.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Norgesgym | Døgnåpent treningssenter i Moss",
    description:
      "Døgnåpent treningssenter på Solgaard Skog i Moss. 429 kr i måneden, ingen bindingstid og gratis parkering. Tren når det passer deg.",
    type: "website",
    locale: "nb_NO",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Norgesgym",
  url: "https://norgesgym.no",
  telephone: "+47 947 89 080",
  email: "post@norgesgym.no",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Solgaard Skog 15",
    postalCode: "1599",
    addressLocality: "Moss",
    addressCountry: "NO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: "429 kr/mnd",
  sameAs: [
    "https://www.facebook.com/NorgesgymAS/",
    "https://www.instagram.com/norgesgym/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
