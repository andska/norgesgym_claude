"use client";
import { useState } from "react";
import { LINKS } from "@/app/config";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Hvordan melder jeg meg inn?",
    a: (
      <>
        Meld deg inn på{" "}
        <a
          href={LINKS.innmelding}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink font-medium underline underline-offset-2 hover:text-graphite transition-colors duration-150"
        >
          norgesgymmoss.ibooking.no
        </a>
        . Det tar et par minutter. Innmelding koster 199 kr, deretter betaler du
        429 kr i måneden via avtalegiro.
      </>
    ),
  },
  {
    q: "Kan jeg trene alene, midt på natten?",
    a: "Ja. Senteret er videoovervåket og selvbetjent hele døgnet. Du kan alltid ringe 947 89 080 hvis du trenger hjelp.",
  },
  {
    q: "Jeg er helt ny. Passer Norgesgym for meg?",
    a: "Ja. Du trenger ingen forkunnskaper. Utstyret er enkelt å bruke, og på dagtid er det ofte rolig på senteret. Ring oss på 947 89 080 hvis du vil vite mer.",
  },
  {
    q: "Har dere gruppetimer eller personlig trener?",
    a: "Nei. Norgesgym er rendyrket for egentrening. Du trener når du vil og i ditt eget tempo, og det er en av grunnene til at vi kan holde prisen nede.",
  },
  {
    q: "Hva er drop-in?",
    a: "Du kan trene én gang uten medlemskap for 120 kr. Full tilgang til alt utstyr, ingen registrering nødvendig.",
  },
  {
    q: "Hvordan kommer jeg inn?",
    a: "Med Membro-appen på mobilen. Appen er nøkkelen din, hele døgnet, alle dager.",
  },
  {
    q: "Er det parkering?",
    a: (
      <>
        Ja, gratis parkering rett utenfor. Se{" "}
        <a
          href="#finn-oss"
          className="text-ink font-medium underline underline-offset-2 hover:text-graphite transition-colors duration-150"
        >
          kart og veibeskrivelse
        </a>{" "}
        for mer informasjon.
      </>
    ),
  },
  {
    q: "Hvordan sier jeg opp?",
    a: "Send en e-post til post@norgesgym.no. Oppsigelsestiden er én måned, og du trenger ikke oppgi noen grunn.",
  },
  {
    q: "Når er resepsjonen bemannet?",
    a: "Mandag til torsdag 16:00–18:30. Resten av døgnet er senteret selvbetjent, og du når oss på telefon 947 89 080.",
  },
];

export default function Sporsmal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="sporsmal" className="bg-smoke py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-[12px] tracking-[0.08em] text-gravel mb-8">Spørsmål</p>
        <h2
          className="font-display font-medium text-ink mb-10"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          Spørsmål og svar
        </h2>

        <div className="max-w-2xl">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-t border-line last:border-b">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left font-display font-medium text-[16px] text-ink"
                >
                  <span>{faq.q}</span>
                  <span className="flex-shrink-0 text-stone" aria-hidden="true">
                    {isOpen ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <line x1="3" y1="10" x2="17" y2="10" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <line x1="10" y1="3" x2="10" y2="17" />
                        <line x1="3" y1="10" x2="17" y2="10" />
                      </svg>
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    className="pb-4 text-[14px] text-stone leading-[1.6]"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
