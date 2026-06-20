"use client";
import { useCallback, useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";

export type LightboxImage = { src: StaticImageData; caption: string };

interface Props {
  images: LightboxImage[];
  open: boolean;
  index: number;
  onClose: () => void;
}

function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// Fullscreen image viewer built on the native <dialog> element (platform focus
// trapping, inert background, Escape-to-close) and CSS scroll-snap for swiping.
// Always mounted; the `open` prop drives showModal()/close() so the CSS
// open/close transition (see .lightbox in globals.css) can run on every path.
// No dependencies, no zoom — enlarged viewing only.
export default function Lightbox({ images, open, index, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const indexRef = useRef(index);

  // Drive the modal from the `open` prop. On open: jump to the clicked image
  // instantly and focus the close button.
  useEffect(() => {
    const dialog = dialogRef.current;
    const row = rowRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      indexRef.current = index;
      if (row) row.scrollLeft = index * row.clientWidth; // instant, no animation
      closeRef.current?.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open, index]);

  // Sync parent state + restore focus on every close (X, backdrop, Escape).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, [onClose]);

  const goTo = useCallback(
    (i: number) => {
      const row = rowRef.current;
      if (!row) return;
      const clamped = Math.max(0, Math.min(images.length - 1, i));
      indexRef.current = clamped;
      row.scrollTo({
        left: clamped * row.clientWidth,
        behavior: reducedMotion() ? "auto" : "smooth",
      });
    },
    [images.length],
  );

  const onScroll = () => {
    const row = rowRef.current;
    if (!row || row.clientWidth === 0) return;
    indexRef.current = Math.round(row.scrollLeft / row.clientWidth);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    // Escape is handled natively by <dialog>; do not preventDefault it.
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(indexRef.current + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(indexRef.current - 1);
    }
  };

  const close = () => dialogRef.current?.close();

  // Close only when the click lands on the backdrop layer itself (the slide
  // element), never on the image, caption, or a control (all descendants).
  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="Bildevisning"
      onKeyDown={onKeyDown}
      className="lightbox fixed inset-0 m-0 h-full w-full max-h-none max-w-none overflow-hidden border-0 p-0 bg-graphite/95 backdrop:bg-graphite/80"
    >
      <div
        ref={rowRef}
        onScroll={onScroll}
        className="flex h-full w-full overflow-x-auto overscroll-contain snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((img, i) => (
          // The slide is the backdrop layer: a click directly on it (the dark
          // area around the image) closes; clicks on the figure do not bubble a
          // close because of the target check in onBackdropClick.
          <div
            key={i}
            onClick={onBackdropClick}
            className="flex h-full w-full flex-shrink-0 snap-center items-center justify-center"
          >
            <figure className="flex flex-col items-center gap-4">
              <div className="relative h-[78dvh] w-[92vw]">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  draggable={false}
                />
              </div>
              <figcaption className="px-6 text-center text-[13px] text-white/70">
                {img.caption}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      {/* Previous / next — desktop only; touch uses swipe. */}
      <button
        type="button"
        aria-label="Forrige bilde"
        onClick={() => goTo(indexRef.current - 1)}
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 p-3 text-white md:block"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 5L8 14l9 9" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Neste bilde"
        onClick={() => goTo(indexRef.current + 1)}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 p-3 text-white md:block"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5l9 9-9 9" />
        </svg>
      </button>

      <button
        ref={closeRef}
        type="button"
        aria-label="Lukk"
        onClick={close}
        className="absolute right-3 top-3 p-3 text-white"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>
    </dialog>
  );
}
