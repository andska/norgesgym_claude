import { LINKS } from "@/app/config";

export default function FinnOss() {
  return (
    <section id="finn-oss" className="bg-white py-16 lg:py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-[12px] tracking-[0.08em] text-gravel mb-8">Finn oss</p>
        <h2
          className="font-display font-medium text-ink mb-10"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          Solgaard Skog 15, Moss
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: address and info */}
          <div className="space-y-8">
            <address className="not-italic text-[15px] leading-[1.75] text-stone">
              <p className="font-display font-medium text-ink text-[16px] mb-2">Adresse</p>
              <p>Solgaard Skog 15</p>
              <p>1599 Moss</p>
              <p className="mt-3 text-[14px]">Gratis parkering rett utenfor senteret.</p>
              {/* TODO copy, verify with owners before launch: one line about
                  driving context (from E6, from Moss sentrum, or both).
                  Do not invent travel times, leave the TODO visible in code */}
              <p className="mt-4">
                <a
                  href={LINKS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] text-ink font-medium underline underline-offset-2 hover:text-graphite transition-colors duration-150"
                >
                  Åpne i Google Maps
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7" />
                  </svg>
                </a>
              </p>
            </address>

            <div>
              <p className="font-display font-medium text-ink text-[16px] mb-2">Resepsjonstider</p>
              <p className="text-[15px] text-stone">Mandag–torsdag 16:00–18:30</p>
              <p className="text-[14px] text-stone mt-1">
                Utenom disse tidene er senteret selvbetjent. Du når oss på{" "}
                <a href="tel:+4794789080" className="text-ink font-medium hover:underline">
                  947 89 080
                </a>{" "}
                eller{" "}
                <a href="mailto:post@norgesgym.no" className="text-ink font-medium hover:underline">
                  post@norgesgym.no
                </a>
                .
              </p>
            </div>
          </div>

          {/* Right: map embed */}
          <div
            className="rounded-img border border-line overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048!2d10.6586!3d59.4369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641528c661d3f4d%3A0x9da5475d30b24093!2sNorgesgym!5e0!3m2!1sno!2sno!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Norgesgym på kart"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
