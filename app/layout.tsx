import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { FLAGS, LINKS } from "./config";
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
  ...(FLAGS.isPreview && { robots: { index: false, follow: false } }),
};

const healthClubLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Norgesgym",
  url: "https://norgesgym.no",
  telephone: "+47 947 89 080",
  email: "post@norgesgym.no",
  foundingDate: "2013",
  hasMap: LINKS.googleMaps,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Solgaard Skog 15",
    postalCode: "1599",
    addressLocality: "Moss",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    // TODO: insert exact coordinates for Solgaard Skog 15, 1599 Moss from Google Maps, do not guess
    latitude: null,
    longitude: null,
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
  makesOffer: [
    {
      "@type": "Offer",
      name: "Månedlig medlemskap",
      price: "429",
      priceCurrency: "NOK",
      description: "Månedlig medlemskap, ingen bindingstid. Innmelding 200 kr.",
    },
    {
      "@type": "Offer",
      name: "Drop-in",
      price: "120",
      priceCurrency: "NOK",
      description: "Enkeltbesøk uten medlemskap.",
    },
  ],
  priceRange: "120–429 kr",
  sameAs: [
    "https://www.facebook.com/NorgesgymAS/",
    "https://www.instagram.com/norgesgym/",
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvordan melder jeg meg inn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meld deg inn på norgesgymmoss.ibooking.no. Det tar et par minutter. Innmelding koster 200 kr, deretter betaler du 429 kr i måneden via avtalegiro. Du kan også komme innom i bemannet resepsjonstid, mandag til torsdag 16:00–18:30, hvis du vil ha hjelp til å komme i gang.",
      },
    },
    {
      "@type": "Question",
      name: "Kan jeg trene alene, midt på natten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Senteret er videoovervåket og selvbetjent hele døgnet.",
      },
    },
    {
      "@type": "Question",
      name: "Jeg er helt ny. Passer Norgesgym for meg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vi har en stor utstyrspark som passer for alle, uansett erfaring. Vi hjelper deg gjerne i gang i resepsjonstiden.",
      },
    },
    {
      "@type": "Question",
      name: "Har dere gruppetimer eller personlig trener?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nei. Norgesgym er rendyrket for egentrening. Du trener når du vil og i ditt eget tempo, og det er en av grunnene til at vi kan holde prisen nede.",
      },
    },
    {
      "@type": "Question",
      name: "Hva er drop-in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Du kan trene én gang uten medlemskap for 120 kr. Full tilgang til alt utstyr, ingen registrering nødvendig.",
      },
    },
    {
      "@type": "Question",
      name: "Hvordan kommer jeg inn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Med Membro-appen på mobilen. Appen er nøkkelen din, hele døgnet, alle dager.",
      },
    },
    {
      "@type": "Question",
      name: "Er det parkering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, gratis parkering rett utenfor. Se kart og veibeskrivelse for mer informasjon.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor ligger Norgesgym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solgaard Skog 15 i Moss, like ved E6, med gratis parkering rett utenfor inngangen. Se kart og veibeskrivelse under Finn oss.",
      },
    },
    {
      "@type": "Question",
      name: "Hva slags utstyr har dere?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stort frivektsutvalg, styrkeapparater for hele kroppen og en komplett kardioavdeling, i tillegg til Stairmaster Stepmill 5, TreadClimber og TRX.",
      },
    },
    {
      "@type": "Question",
      name: "Hvordan sier jeg opp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send en e-post til post@norgesgym.no. Oppsigelsestiden er én måned, regnet fra første dag i påfølgende måned.",
      },
    },
    {
      "@type": "Question",
      name: "Når er resepsjonen bemannet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mandag til torsdag 16:00–18:30. Resten av døgnet er senteret selvbetjent, og du når oss på telefon 947 89 080.",
      },
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(healthClubLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        {children}
      </body>
    </html>
  );
}
