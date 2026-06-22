import { LINKS, FLAGS } from "@/app/config";
import PlaceholderImage from "./PlaceholderImage";

function HeroCopy() {
  return (
    <>
      {/* One sub line. Numbers (price, binding, 24/7) live in the stat band below,
          so they are deliberately not repeated here. */}
      <p className="text-[17px] text-stone leading-relaxed mb-10 max-w-xl">
        Et døgnåpent treningssenter i nordre Moss, med stor utstyrspark og god plass.
        Selvbetjent egentrening i ditt eget tempo, akkurat når det passer deg.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={LINKS.innmelding}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink text-white text-[14px] font-medium rounded-btn px-6 py-3 hover:bg-graphite transition-colors duration-150"
        >
          Bli medlem
        </a>
        <a
          href={LINKS.innmelding}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-ink text-ink text-[14px] font-medium rounded-btn px-6 py-3 hover:bg-smoke transition-colors duration-150"
        >
          Prøv gratis
        </a>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section
      className="bg-white pb-8 sm:pb-[clamp(64px,8vw,96px)]"
      style={{ paddingTop: "clamp(96px, 12vw, 160px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {FLAGS.heroPhoto ? (
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-16 items-center">
            <div>
              <h1
                className="font-display font-medium text-ink mb-6 text-balance"
                style={{ fontSize: "clamp(2.75rem, 7vw, 4.5rem)", lineHeight: 1.08 }}
              >
                God plass. Eget tempo.
              </h1>
              <HeroCopy />
            </div>
            {/* TODO photo: hero image of the gym interior, welcoming atmosphere */}
            <PlaceholderImage aspect="4:5" alt="Norgesgym treningssenter" />
          </div>
        ) : (
          <>
            <h1
              className="font-display font-medium text-ink mb-6 max-w-2xl text-balance"
              style={{ fontSize: "clamp(2.75rem, 7vw, 4.5rem)", lineHeight: 1.08 }}
            >
              God plass. Eget tempo.
            </h1>
            <HeroCopy />
          </>
        )}
      </div>
    </section>
  );
}
