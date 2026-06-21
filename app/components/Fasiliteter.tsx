import GymGallery from "./GymGallery";

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
          Norgesgym er et selvbetjent treningssenter i Moss for egentrening. Her finner du alt du trenger til en komplett økt, med god plass og ro til å trene i ditt eget tempo.
        </p>

        <GymGallery />
      </div>
    </section>
  );
}
