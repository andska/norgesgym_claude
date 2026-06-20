import Image, { type StaticImageData } from "next/image";

type Aspect = "3:2" | "1:1" | "16:9" | "4:5";

interface Props {
  src?: string | StaticImageData;
  alt: string;
  aspect: Aspect;
  /** Overrides the fixed aspect class — use for responsive aspect ratios, e.g. "aspect-[3/2] md:aspect-square". */
  aspectClassName?: string;
  /** Visible text inside the empty placeholder surface; falls back to alt. Lets the image alt stay empty when a figcaption already describes it. */
  label?: string;
  sizes?: string;
  className?: string;
}

const aspectClasses: Record<Aspect, string> = {
  "3:2": "aspect-[3/2]",
  "1:1": "aspect-square",
  "16:9": "aspect-video",
  "4:5": "aspect-[4/5]",
};

export default function PlaceholderImage({
  src,
  alt,
  aspect,
  aspectClassName,
  label,
  sizes,
  className = "",
}: Props) {
  const aspectClass = aspectClassName ?? aspectClasses[aspect];

  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-img ${aspectClass} ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`${aspectClass} bg-mist rounded-img flex items-center justify-center ${className}`}
    >
      <span
        aria-hidden="true"
        className="text-[12px] text-stone text-center px-6 leading-snug"
      >
        {label ?? alt}
      </span>
    </div>
  );
}
