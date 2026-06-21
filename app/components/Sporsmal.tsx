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
        . Det tar et par minutter. Innmelding koster 200 kr, deretter betaler du
        429 kr i måneden via avtalegiro. Du kan også komme innom i bemannet
        resepsjonstid, mandag til torsdag 16:00–18:30, hvis du vil ha hjelp til å
        komme i gang.
      </>
    ),
  },
  {
    q: "Kan jeg trene alene, midt på natten?",
    a: "Ja. Senteret er videoovervåket og selvbetjent hele døgnet.",
  },
  {
    q: "Jeg er helt ny. Passer Norgesgym for meg?",
    a: "Vi har en stor utstyrspark som passer for alle, uansett erfaring. Vi hjelper deg gjerne i gang i resepsjonstiden.",
  },
  {
    q: "Har dere gruppetimer eller personlig trener?",
    a: "Nei. Norgesgym er rendyrket for egentrening. Du trener når du vil og i ditt eget tempo, og det er en av grunnene til at vi kan holde prisen nede.",
  },
  {
    q: "Hva er drop-in?",
    a: "Du kan trene én gang uten medlemskap for 120 kr. Full tilgang til senteret med Membro appen.",
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
    q: "Hvor ligger Norgesgym?",
    a: (
      <>
        Solgaard Skog 15 i Moss, like ved E6, med gratis parkering rett utenfor inngangen.
        Se kart og veibeskrivelse under{" "}
        <a
          href="#finn-oss"
          className="text-ink font-medium underline underline-offset-2 hover:text-graphite transition-colors duration-150"
        >
          Finn oss
        </a>
        .
      </>
    ),
  },
  {
    q: "Hva slags utstyr har dere?",
    // TODO: if owner confirms the machines are Life Fitness, prepend
    // "Komplett maskinpark fra Life Fitness. " here and in the faqLd copy.
    a: "Stort frivektsutvalg, styrkeapparater for hele kroppen og en komplett kardioavdeling, i tillegg til Stairmaster Stepmill 5, TreadClimber og TRX.",
  },
  {
    q: "Hvordan sier jeg opp?",
    // TODO: verify this wording matches the iBooking contract terms exactly before launch.
    a: "Send en e-post til post@norgesgym.no. Oppsigelsestiden er én måned, regnet fra første dag i påfølgende måned.",
  },
  {
    q: "Når er resepsjonen bemannet?",
    a: "Mandag til torsdag 16:00–18:30. Sommertid og høytider kan påvirke bemanningen i resepsjonen."
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
