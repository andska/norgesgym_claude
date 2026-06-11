import PlaceholderImage from "./PlaceholderImage";

export default function Kontakt() {
  return (
    <footer id="kontakt" className="bg-graphite py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* TODO photo: facade and entrance so visitors recognize the building. */}
        <div className="max-w-sm mb-12">
          <PlaceholderImage
            aspect="3:2"
            alt="Fasade og inngang, Solgaard Skog 15"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact */}
          <div>
            <p
              className="font-display font-semibold uppercase tracking-[0.06em] text-white mb-5 text-[15px]"
              style={{ fontStretch: "125%" }}
            >
              Norgesgym
            </p>
            <address className="not-italic text-[14px] leading-[1.7] text-[#A6A39C]">
              <p>Solgaard Skog 15, 1599 Moss</p>
              <p className="mt-2">
                <a
                  href="tel:+4794789080"
                  className="hover:text-white transition-colors duration-150"
                >
                  947 89 080
                </a>
              </p>
              <p>
                <a
                  href="mailto:post@norgesgym.no"
                  className="hover:text-white transition-colors duration-150"
                >
                  post@norgesgym.no
                </a>
              </p>
              <p className="mt-3">Resepsjon: mandag til torsdag 16:00 til 18:30</p>
              <p>Senteret er åpent hele døgnet for medlemmer.</p>
              <p className="mt-3">
                <a
                  href="https://www.google.com/maps/search/Norgesgym+Solgaard+Skog+15+Moss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150 underline underline-offset-2"
                >
                  Finn oss i Google Maps
                </a>
              </p>
            </address>
          </div>

          {/* Nav links */}
          <nav aria-label="Sidefotnavigasjon">
            <p className="text-[12px] tracking-[0.08em] text-[#A6A39C] mb-4">Navigasjon</p>
            <ul className="space-y-2 text-[14px] text-[#A6A39C]">
              <li>
                <a href="#pris" className="hover:text-white transition-colors duration-150">
                  Priser
                </a>
              </li>
              <li>
                <a href="#fasiliteter" className="hover:text-white transition-colors duration-150">
                  Fasiliteter
                </a>
              </li>
              <li>
                <a href="#sporsmal" className="hover:text-white transition-colors duration-150">
                  Spørsmål
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white transition-colors duration-150">
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-[12px] tracking-[0.08em] text-[#A6A39C] mb-4">Følg oss</p>
            <ul className="space-y-2 text-[14px] text-[#A6A39C]">
              <li>
                <a
                  href="https://www.facebook.com/NorgesgymAS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/norgesgym/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone/30 pt-8">
          <p className="text-[13px] text-[#A6A39C]">
            Org.nr. 995 874 369. © Norgesgym AS.
          </p>
        </div>
      </div>
    </footer>
  );
}
