import PlaceholderImage from "./PlaceholderImage";
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
};

// Rows on desktop: [6] lead, then [3+3], then [2+2+2].
const slots: Slot[] = [
  { src: gym1, span: "md:col-span-6", aspectClassName: "aspect-[3/2]" },
  { src: gym2, span: "md:col-span-3", aspectClassName: "aspect-[3/2]" },
  { src: gym3, span: "md:col-span-3", aspectClassName: "aspect-[3/2]" },
  { src: gym4, span: "md:col-span-2", aspectClassName: "aspect-[3/2] md:aspect-square" },
  { src: gym5, span: "md:col-span-2", aspectClassName: "aspect-[3/2] md:aspect-square" },
  { src: gym6, span: "md:col-span-2", aspectClassName: "aspect-[3/2] md:aspect-square" },
];

export default function GymGallery() {
  return (
    <div
      className="-mx-6 overflow-x-auto snap-x snap-mandatory pb-3 md:mx-0 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex gap-4 px-6 md:grid md:grid-cols-6 md:gap-4 md:px-0">
        {slots.map((slot, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-[82%] snap-start md:w-auto ${slot.span}`}
          >
            <PlaceholderImage
              src={slot.src}
              alt="Fra treningssenteret til Norgesgym i Moss"
              aspect="3:2"
              aspectClassName={slot.aspectClassName}
              sizes="(min-width: 768px) 50vw, 82vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
