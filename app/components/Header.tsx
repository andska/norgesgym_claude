"use client";
import { useState } from "react";
import { LINKS } from "@/app/config";

const navLinks = [
  { href: "#slik-fungerer-det", label: "Slik fungerer det" },
  { href: "#fasiliteter", label: "Fasiliteter" },
  { href: "#pris", label: "Priser" },
  { href: "#sporsmal", label: "Spørsmål" },
  { href: "#finn-oss", label: "Finn oss" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" onClick={close} className="leading-none">
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

        {/* Desktop nav */}
        <nav aria-label="Sidenavigasjon" className="hidden sm:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[14px] text-stone hover:text-ink transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
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
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="sm:hidden -mr-1 p-1 text-ink"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="5" y1="5" x2="17" y2="17" />
                <line x1="17" y1="5" x2="5" y2="17" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="15" x2="19" y2="15" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobilnavigasjon"
          className="sm:hidden border-t border-line bg-white"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={close}
                className="py-4 text-[15px] text-stone hover:text-ink border-b border-line transition-colors duration-150"
              >
                {label}
              </a>
            ))}
            <a
              href={LINKS.minSide}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="py-4 text-[15px] text-stone hover:text-ink border-b border-line transition-colors duration-150"
            >
              Min side
            </a>
            <div className="py-5">
              <a
                href={LINKS.innmelding}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="block w-full text-center bg-ink text-white text-[14px] font-medium rounded-btn px-6 py-3.5 hover:bg-graphite transition-colors duration-150"
              >
                Bli medlem
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
