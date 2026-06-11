import PlaceholderImage from "./PlaceholderImage";

export default function Fasiliteter() {
  return (
    <section id="fasiliteter" className="bg-smoke py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-[12px] tracking-[0.08em] text-gravel mb-8">Fasiliteter</p>
        <h2
          className="font-display font-medium text-ink mb-4"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          Alt du trenger for egentrening
        </h2>
        <p className="text-[15px] text-stone leading-relaxed mb-10 max-w-2xl">
          Norgesgym er rendyrket for egentrening. Du trener når du vil, i ditt eget tempo,
          uten timeplaner og bookinger.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* TODO photo: overview of the free weights area, daylight, tidy. */}
          <figure className="flex flex-col gap-3">
            <PlaceholderImage aspect="3:2" alt="Frivekter: manualer, stenger og racks" />
            <figcaption className="text-[13px] text-stone">Frivekter</figcaption>
          </figure>
          {/* TODO photo: strength machines, clean and accessible. */}
          <figure className="flex flex-col gap-3">
            <PlaceholderImage aspect="3:2" alt="Styrkeapparater for hele kroppen" />
            <figcaption className="text-[13px] text-stone">Styrkeapparater</figcaption>
          </figure>
          {/* TODO photo: cardio section, treadmills and bikes. */}
          <figure className="flex flex-col gap-3">
            <PlaceholderImage aspect="3:2" alt="Kardioutstyr: tredemøller og sykler" />
            <figcaption className="text-[13px] text-stone">Kardio</figcaption>
          </figure>
        </div>

        <p className="text-[14px] text-stone leading-relaxed mt-10 max-w-2xl">
          I tillegg har vi Stairmaster Stepmill 5, TreadClimber og TRX-soner for slyngetrening.
        </p>
      </div>
    </section>
  );
}
