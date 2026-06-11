type Stat =
  | { kind: "number"; number: string; label: string }
  | { kind: "text"; label: string }
  | { kind: "hours"; heading: string; time: string };

const stats: Stat[] = [
  { kind: "number", number: "24/7", label: "Døgnåpent" },
  { kind: "number", number: "429,-", label: "per mnd – uten binding" },
  { kind: "text", label: "Gratis parkering" },
  { kind: "hours", heading: "Resepsjon bemannet mandag–torsdag", time: "16:00–18:30" },
];

export default function StatBand() {
  return (
    <div className="border-t border-b border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-white py-8 px-5 lg:px-8 ${i === 0 ? "lg:pl-0" : ""} ${i === 3 ? "lg:pr-0" : ""}`}
            >
              {stat.kind === "number" && (
                <>
                  <div
                    className="font-display font-medium text-ink leading-tight"
                    style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontStretch: "125%" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-[13px] text-stone mt-2">{stat.label}</div>
                </>
              )}
              {stat.kind === "text" && (
                <div
                  className="font-display font-medium text-ink leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontStretch: "125%" }}
                >
                  {stat.label}
                </div>
              )}
              {stat.kind === "hours" && (
                <>
                  <p className="text-[11px] tracking-[0.06em] text-gravel mb-2 leading-snug">
                    {stat.heading}
                  </p>
                  <div
                    className="font-display font-medium text-ink leading-none"
                    style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontStretch: "125%" }}
                  >
                    {stat.time}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
