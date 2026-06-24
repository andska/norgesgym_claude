import { LINKS } from "@/app/config";

// Gratis prøvetime. Honest, friction-light offer — no fake automated flow yet.
// TODO: replace this block with an automated trial signup flow once the
// iBooking/Membro kontraktsmal for Gratis Prøvetime is ready (contact Frank
// Olsen, iBooking).
export default function Provetime() {
  return (
    <section id="provetime" className="bg-white border-t border-b border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <p className="text-[12px] tracking-[0.08em] text-signal mb-4">Gratis prøvetime</p>
        <p className="font-display font-medium text-ink text-[20px] mb-3">
          Vil du se senteret først?
        </p>
        <p className="text-[15px] text-stone leading-relaxed max-w-2xl">
          Kom innom mens resepsjonen er bemannet,
          eller ring{" "}
          <a
            href="tel:+4794789080"
            className="text-ink font-medium hover:text-signal hover:underline"
          >
            947 89 080
          </a>
          , så avtaler vi en gratis prøvetime. Du kan også
          {" "}
          <a
            href={LINKS.innmelding}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink font-medium hover:text-signal hover:underline"
          >
            kjøpe drop-in for ett besøk
          </a>
          .
        </p>
      </div>
    </section>
  );
}
