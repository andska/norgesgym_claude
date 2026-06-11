import PlaceholderImage from "./PlaceholderImage";

const facilities = [
  { alt: "Frivekter: manualer, stenger og racks", caption: "Frivekter" },
  { alt: "Styrkeapparater for hele kroppen", caption: "Styrkeapparater" },
  { alt: "Kardioutstyr: tredemøller og sykler", caption: "Kardio" },
];

export default function Fasiliteter() {
  return (
    <section id="fasiliteter" className="bg-smoke py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-[12px] tracking-[0.08em] text-gravel mb-8">Fasiliteter</p>
        <h2
          className="font-display font-medium text-ink mb-4"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          Alt du trenger
        </h2>
        <p className="text-[15px] text-stone leading-relaxed mb-10 max-w-2xl">
          Norgesgym er rendyrket for egentrening. Ingen timeplaner, ingen bookinger, bare
          deg og treningen din, i ditt eget tempo.
        </p>

        {/* Mobile: horizontal swipe carousel */}
        <div
          className="sm:hidden -mx-6 overflow-x-auto snap-x snap-mandatory pb-3 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex gap-4 pl-6 pr-6">
            {facilities.map((f) => (
              <figure
                key={f.caption}
                className="flex-shrink-0 w-[82%] snap-start flex flex-col gap-3"
              >
                <PlaceholderImage aspect="3:2" alt={f.alt} />
                <figcaption className="text-[13px] text-stone">{f.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4">
          {facilities.map((f) => (
            <figure key={f.caption} className="flex flex-col gap-3">
              <PlaceholderImage aspect="3:2" alt={f.alt} />
              <figcaption className="text-[13px] text-stone">{f.caption}</figcaption>
            </figure>
          ))}
        </div>

        <p className="text-[14px] text-stone leading-relaxed mt-10 max-w-[60ch]">
          Stort frivektsutvalg, styrkeapparater, komplett kardioavdeling, Stairmaster
          Stepmill 5, TreadClimber og TRX.
        </p>
      </div>
    </section>
  );
}
