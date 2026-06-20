"use client";
import { useRef, useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import Lightbox from "./Lightbox";
import gym1 from "@/public/fasiliteter/gym-1.webp";
import gym2 from "@/public/fasiliteter/gym-2.webp";
import gym3 from "@/public/fasiliteter/gym-3.webp";
import gym4 from "@/public/fasiliteter/gym-4.webp";
import gym5 from "@/public/fasiliteter/gym-5.webp";
import gym6 from "@/public/fasiliteter/gym-6.webp";

// Photo gallery for the gym. ONE set of figures in the DOM; layout switches by
// CSS only (mobile scroll-snap row → ≥768px editorial grid).
//
// Static imports (not raw "/..." paths) so Next applies the correct basePath:
// "/norgesgym_claude" in the GitHub Pages preview, "" in production (Vercel).

type Slot = {
  src: typeof gym1;
  /** Desktop column span on the 6-col grid. */
  span: string;
  /** 3:2 on mobile; mixed on ≥768px for the editorial grid. */
  aspectClassName: string;
  /** Used as the image alt and as the lightbox caption. */
  caption: string;
};

// Rows on desktop: [6] lead, then [3+3], then [2+2+2].
const slots: Slot[] = [
  { src: gym1, span: "md:col-span-6", aspectClassName: "aspect-[3/2]", caption: "Hovedsalen" },
  { src: gym2, span: "md:col-span-3", aspectClassName: "aspect-[3/2]", caption: "Stor møllepark" },
  { src: gym3, span: "md:col-span-3", aspectClassName: "aspect-[3/2]", caption: "Stort utvalg av frivekter" },
  { src: gym4, span: "md:col-span-2", aspectClassName: "aspect-[3/2] md:aspect-square", caption: "Hele hovedsalen" },
  { src: gym5, span: "md:col-span-2", aspectClassName: "aspect-[3/2] md:aspect-square", caption: "Funksjonell sone" },
  { src: gym6, span: "md:col-span-2", aspectClassName: "aspect-[3/2] md:aspect-square", caption: "Garderober" },
];

// Single source of truth: the lightbox reads the same list, derived from `slots`.
const lightboxImages = slots.map((s) => ({ src: s.src, caption: s.caption }));

export default function GymGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const open = (i: number, el: HTMLButtonElement) => {
    triggerRef.current = el;
    setOpenIndex(i);
  };

  const close = () => {
    setOpenIndex(null);
    const el = triggerRef.current;
    requestAnimationFrame(() => el?.focus());
  };

  return (
    <>
      <div
        className="-mx-6 overflow-x-auto snap-x snap-mandatory pb-3 md:mx-0 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-4 px-6 md:grid md:grid-cols-6 md:gap-4 md:px-0">
          {slots.map((slot, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => open(i, e.currentTarget)}
              aria-label={`Åpne bilde ${i + 1} av ${slots.length} i full størrelse`}
              className={`block cursor-pointer border-0 bg-transparent p-0 flex-shrink-0 w-[82%] snap-start md:w-auto ${slot.span}`}
            >
              <PlaceholderImage
                src={slot.src}
                alt={slot.caption}
                aspect="3:2"
                aspectClassName={slot.aspectClassName}
                sizes="(min-width: 768px) 50vw, 82vw"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        open={openIndex !== null}
        index={openIndex ?? 0}
        onClose={close}
      />
    </>
  );
}
