export default function Hero() {
  return (
    <section
      className="bg-white"
      style={{ paddingTop: "clamp(96px, 12vw, 160px)", paddingBottom: "clamp(64px, 8vw, 96px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h1
          className="font-display font-medium text-ink mb-6 max-w-2xl"
          style={{ fontSize: "clamp(2.75rem, 7vw, 4.5rem)", lineHeight: 1.08 }}
        >
          Tren når det passer deg.
        </h1>
        <p className="text-[17px] text-stone leading-relaxed mb-10 max-w-xl">
          Døgnåpent treningssenter på Solgaard Skog i Moss. 429 kr i måneden, ingen
          bindingstid og én måneds oppsigelse.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#pris"
            className="bg-ink text-white text-[14px] font-medium rounded-btn px-6 py-3 hover:bg-graphite transition-colors duration-150"
          >
            Bli medlem
          </a>
          <a
            href="#fasiliteter"
            className="border border-ink text-ink text-[14px] font-medium rounded-btn px-6 py-3 hover:bg-smoke transition-colors duration-150"
          >
            Se fasilitetene
          </a>
        </div>
      </div>
    </section>
  );
}
