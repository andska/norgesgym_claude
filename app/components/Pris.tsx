import { LINKS } from "@/app/config";

const specs = [
  { label: "Månedspris", value: "429 kr" },
  { label: "Innmelding", value: "200 kr, engangsbeløp" },
  { label: "Drop-in", value: "120 kr per besøk" },
  { label: "Årsavgift", value: "Ingen" },
  { label: "Bindingstid", value: "Ingen" },
  { label: "Oppsigelse", value: "Én måned, via e-post" },
  { label: "Betaling", value: "Avtalegiro" },
  { label: "Tilgang", value: "Hele døgnet med Membro-appen" },
] as const;

export default function Pris() {
  return (
    <section id="pris" className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-[12px] tracking-[0.08em] text-gravel mb-8">Pris</p>
        <h2
          className="font-display font-medium text-ink mb-10"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          Enkle priser. Ingen overraskelser.
        </h2>

        <div className="max-w-lg border-t border-line mb-10">
          {specs.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-2 gap-4 border-b border-line py-4"
            >
              <span className="text-[14px] text-stone">{row.label}</span>
              <span className="font-display font-medium text-[16px] text-ink">
                {row.label === "Betaling" ? (
                  <a
                    href={LINKS.avtalegiro}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-graphite transition-colors duration-150"
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href={LINKS.innmelding}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-white text-[14px] font-medium rounded-btn px-6 py-3 hover:bg-graphite transition-colors duration-150"
          >
            Bli medlem
          </a>
          <a
            href={LINKS.innmelding}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-ink text-ink text-[14px] font-medium rounded-btn px-6 py-3 hover:bg-smoke transition-colors duration-150"
          >
            Kjøp drop-in
          </a>
        </div>

        <p className="text-[14px] text-stone leading-relaxed">
          Ring{" "}
          <a
            href="tel:+4794789080"
            className="text-ink font-medium hover:underline"
          >
            947 89 080
          </a>{" "}
          eller send en e-post til{" "}
          <a
            href="mailto:post@norgesgym.no"
            className="text-ink font-medium hover:underline"
          >
            post@norgesgym.no
          </a>
          , så hjelper vi deg i gang.
        </p>
      </div>
    </section>
  );
}
