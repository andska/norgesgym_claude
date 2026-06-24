"use client";
import { useEffect, useState } from "react";
import { SUMMER_HOURS, isSummerReception } from "@/app/config";

// Date-driven summer reception note, shown under the reception hours in Finn oss.
// Evaluated on mount (client side), not at build time, so it appears and
// disappears on its own at the period boundaries WITHOUT a rebuild/redeploy. We
// gate on `mounted` so the first client render matches the server-rendered HTML
// (note absent) — this avoids a hydration mismatch — and the note then shows
// after mount if today is within the window.
//
// This describes STAFFED RECEPTION ONLY. Member access via the Membro app is
// unchanged 24/7 the whole period; the copy in SUMMER_HOURS.text says so.
export default function SummerReceptionNote() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !isSummerReception()) return null;

  return (
    <div className="mt-4 border-l border-line pl-4">
      <p className="text-[12px] tracking-[0.08em] text-signal mb-1">
        {SUMMER_HOURS.label}
      </p>
      <p className="text-[14px] text-stone leading-[1.6]">{SUMMER_HOURS.text}</p>
    </div>
  );
}
