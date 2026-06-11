import Image from "next/image";

type Aspect = "3:2" | "1:1" | "16:9";

interface Props {
  src?: string;
  alt: string;
  aspect: Aspect;
  className?: string;
}

const aspectClasses: Record<Aspect, string> = {
  "3:2": "aspect-[3/2]",
  "1:1": "aspect-square",
  "16:9": "aspect-video",
};

export default function PlaceholderImage({ src, alt, aspect, className = "" }: Props) {
  const aspectClass = aspectClasses[aspect];

  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-img ${aspectClass} ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`${aspectClass} bg-mist rounded-img flex items-center justify-center ${className}`}
    >
      <span className="text-[12px] text-stone text-center px-6 leading-snug">{alt}</span>
    </div>
  );
}
