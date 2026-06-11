"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Hvordan melder jeg meg inn?",
    a: "Ring oss på 947 89 080 eller send en e-post til post@norgesgym.no, så ordner vi alt. Innmelding koster 199 kr, deretter betaler du 429 kr i måneden med avtalegiro.",
  },
  {
    q: "Er det trygt å trene alene?",
    a: "Ja. Senteret er videoovervåket hele døgnet, og du når oss alltid på telefon. Mange av medlemmene våre trener alene, på alle tider av døgnet.",
  },
  {
    q: "Jeg er helt ny. Passer Norgesgym for meg?",
    a: "Ja. Du trenger ingen forkunnskaper for å trene hos oss. På dagtid er det ofte rolig på senteret, og du kan alltid ringe oss hvis du lurer på noe.",
  },
  {
    q: "Har dere gruppetimer eller personlig trener?",
    a: "Nei. Norgesgym er rendyrket for egentrening. Du trener når du vil og i ditt eget tempo, og det er en av grunnene til at vi kan holde prisen nede.",
  },
  {
    q: "Hvordan kommer jeg inn?",
    a: "Med Membro-appen på mobilen. Den fungerer som nøkkelen din, hele døgnet, alle dager.",
  },
  {
    q: "Hvordan sier jeg opp?",
    a: "Send en e-post til post@norgesgym.no. Oppsigelsestiden er én måned, og du trenger ikke oppgi noen grunn.",
  },
  {
    q: "Er det parkering?",
    a: "Ja, 108 gratis plasser rett utenfor. Maks høyde er 2,20 meter.",
  },
  {
    q: "Når er det folk på senteret?",
    a: "Resepsjonen er bemannet mandag til torsdag 16:00 til 18:30. Resten av døgnet er senteret selvbetjent, og du når oss på telefon 947 89 080.",
  },
] as const;

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
