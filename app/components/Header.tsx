import { LINKS } from "@/app/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="leading-none">
          <span
            className="block font-display font-semibold uppercase tracking-[0.06em] text-ink text-[15px]"
            style={{ fontStretch: "125%" }}
          >
            NORGESGYM
          </span>
          <span
            className="block font-display text-[10px] tracking-[0.14em] text-gravel uppercase mt-0.5"
            style={{ fontStretch: "125%" }}
          >
            MOSS
          </span>
        </a>

        <nav aria-label="Sidenavigasjon" className="hidden sm:flex items-center gap-7">
          <a href="#pris" className="text-[14px] text-stone hover:text-ink transition-colors duration-150">
            Priser
          </a>
          <a href="#fasiliteter" className="text-[14px] text-stone hover:text-ink transition-colors duration-150">
            Fasiliteter
          </a>
          <a href="#sporsmal" className="text-[14px] text-stone hover:text-ink transition-colors duration-150">
            Spørsmål
          </a>
          <a href="#finn-oss" className="text-[14px] text-stone hover:text-ink transition-colors duration-150">
            Finn oss
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={LINKS.minSide}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-[14px] text-stone hover:text-ink transition-colors duration-150"
          >
            Min side
          </a>
          <a
            href={LINKS.innmelding}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink text-white text-[14px] font-medium rounded-btn px-5 py-2.5 hover:bg-graphite transition-colors duration-150"
          >
            Bli medlem
          </a>
        </div>
      </div>
    </header>
  );
}
