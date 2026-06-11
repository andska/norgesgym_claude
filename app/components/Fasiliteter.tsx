import IndexList from "./IndexList";
import PlaceholderImage from "./PlaceholderImage";

const items = [
  {
    number: "01",
    keyword: "Frivekter",
    description: "Stort utvalg av manualer, stenger, racks og benker.",
  },
  {
    number: "02",
    keyword: "Styrkeapparater",
    description: "Apparater for hele kroppen, enkle å bruke også for deg som er ny.",
  },
  {
    number: "03",
    keyword: "Kardio",
    description: "Komplett avdeling med tredemøller, romaskiner og sykler.",
  },
  {
    number: "04",
    keyword: "Stairmaster Stepmill 5",
    description: "Ekte trappetrinn, effektiv kondisjonstrening.",
  },
  {
    number: "05",
    keyword: "TreadClimber",
    description: "Skånsom og effektiv gange i motbakke.",
  },
  {
    number: "06",
    keyword: "TRX",
    description: "Slyngetrening med egen kroppsvekt.",
  },
] as const;

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

        <IndexList items={items} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {/* TODO photo: overview of the free weights area, daylight, tidy. */}
          <PlaceholderImage
            aspect="3:2"
            alt="Oversikt over frivektssonen"
          />
          {/* TODO photo: close-up detail, dumbbells or plates. Tight crops flatter the space, wide shots do not. Prefer details. */}
          <PlaceholderImage
            aspect="1:1"
            alt="Detalj: manualer eller vektskiver"
          />
        </div>
      </div>
    </section>
  );
}
