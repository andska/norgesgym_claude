"use client";
import { useEffect, useMemo, useRef, useState } from "react";
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

// Shared control styling. Opacity-only feedback (70% → 100% on hover/focus,
// 150ms, instant under reduced motion), a ≥44px hit area around a small thin
// icon, pointer cursor, and a focus ring that stays visible on the dark
// backdrop. No boxes, fills, or shadows.
const CONTROL =
  "h-12 w-12 items-center justify-center cursor-pointer text-white opacity-70 transition-opacity duration-150 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-white motion-reduce:transition-none";

const CHEVRON = 48; // visible button hit area (px)
// Minimum dark gap beside the image needed to show a chevron without it
// overlapping the photo. Below this the chevrons hide and swipe takes over.
const MIN_GAP = 64;

// Fullscreen image viewer built on the native <dialog> element and CSS
// scroll-snap. Looping carousel: clones of the last and first images sit at the
// ends of the scroll row; when a swipe (or arrow) lands on a clone the scroll
// position is reset instantly to the matching real slide, so it wraps
// seamlessly in both directions. No dependencies, no zoom.
export default function Lightbox({ images, open, index, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const imgWrapRef = useRef<HTMLSpanElement>(null); // a real image, for gap measurement
  const settleTimer = useRef<number | null>(null);
  const physRef = useRef(1); // physical slide index: 0 = clone(last), 1..n = real, n+1 = clone(first)
  const [gap, setGap] = useState(0);

  const n = images.length;
  // [clone(last), ...images, clone(first)] — real images live at physical 1..n.
  const slides = useMemo(
    () => (n > 0 ? [images[n - 1], ...images, images[0]] : []),
    [images, n],
  );

  // Drive the modal from the `open` prop. On open: jump to the clicked image
  // (physical index + 1) instantly and focus the close button.
  useEffect(() => {
    const dialog = dialogRef.current;
    const row = rowRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      physRef.current = index + 1;
      if (row) row.scrollLeft = (index + 1) * row.clientWidth; // instant
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

  // Measure the dark gap beside the image so the chevrons sit inside it and
  // hide when it gets too small (narrow / tall-narrow viewports).
  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      const wrap = imgWrapRef.current;
      if (!row || !wrap) return;
      setGap((row.clientWidth - wrap.clientWidth) / 2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (imgWrapRef.current) ro.observe(imgWrapRef.current);
    if (rowRef.current) ro.observe(rowRef.current);
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [open]);

  useEffect(
    () => () => {
      if (settleTimer.current) window.clearTimeout(settleTimer.current);
    },
    [],
  );

  // After scrolling settles, if we landed on a clone, jump instantly to the
  // matching real slide. The clone is identical, so the jump is invisible.
  const settle = () => {
    const row = rowRef.current;
    if (!row) return;
    const w = row.clientWidth;
    if (!w) return;
    const p = Math.round(row.scrollLeft / w);
    if (p === 0) {
      row.scrollLeft = n * w;
      physRef.current = n;
    } else if (p === n + 1) {
      row.scrollLeft = w;
      physRef.current = 1;
    } else {
      physRef.current = p;
    }
  };

  const onScroll = () => {
    if (settleTimer.current) window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(settle, 100);
  };

  // Move one slide. Scrolls to an adjacent physical slide (which may be a
  // clone); settle() then loops it back to the real slide. Smooth normally,
  // instant under reduced motion.
  const go = (dir: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    const target = physRef.current + dir;
    physRef.current = target;
    row.scrollTo({
      left: target * row.clientWidth,
      behavior: reducedMotion() ? "auto" : "smooth",
    });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    // Escape is handled natively by <dialog>; do not preventDefault it.
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  const close = () => dialogRef.current?.close();

  // Close on any click that is NOT on the image (figure) or a control (button).
  const onDialogClick = (e: React.MouseEvent) => {
    const t = e.target as HTMLElement;
    if (!t.closest("figure") && !t.closest("button")) close();
  };

  const showChevrons = gap >= MIN_GAP;
  const inset = Math.max(0, gap / 2 - CHEVRON / 2); // centre the chevron in the gap

  return (
    <dialog
      ref={dialogRef}
      aria-label="Bildevisning"
      onKeyDown={onKeyDown}
      onClick={onDialogClick}
      className="lightbox fixed inset-0 m-0 h-full w-full max-h-none max-w-none overflow-hidden border-0 p-0 bg-graphite/95 backdrop:bg-graphite/80"
    >
      <div
        ref={rowRef}
        onScroll={onScroll}
        className="flex h-full w-full overflow-x-auto overscroll-contain snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {slides.map((img, i) => (
          <div
            key={i}
            className="flex h-full w-full flex-shrink-0 snap-center items-center justify-center"
          >
            {/* The figure tightly wraps the actual image (intrinsic size), so
                everything around it is true backdrop that closes on click. */}
            <figure className="flex flex-col items-center gap-4">
              <span ref={i === 0 ? imgWrapRef : undefined} className="block w-fit">
                <Image
                  src={img.src}
                  alt={img.caption}
                  className="block h-auto w-auto max-h-[82dvh] max-w-[92vw]"
                  draggable={false}
                />
              </span>
              <figcaption className="px-6 text-center text-[13px] text-white/70">
                {img.caption}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      {/* Previous / next — positioned inside the measured gap, hidden when the
          gap is too small (swipe handles navigation then). */}
      {showChevrons && (
        <>
          <button
            type="button"
            aria-label="Forrige bilde"
            onClick={() => go(-1)}
            style={{ left: inset }}
            className={`${CONTROL} absolute top-1/2 inline-flex -translate-y-1/2`}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 5L8 14l9 9" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Neste bilde"
            onClick={() => go(1)}
            style={{ right: inset }}
            className={`${CONTROL} absolute top-1/2 inline-flex -translate-y-1/2`}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5l9 9-9 9" />
            </svg>
          </button>
        </>
      )}

      {/* Close — always visible, clear of the image in the top corner. */}
      <button
        ref={closeRef}
        type="button"
        aria-label="Lukk"
        onClick={close}
        className={`${CONTROL} absolute right-3 top-3 inline-flex`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>
    </dialog>
  );
}
