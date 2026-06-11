const stats = [
  { number: "24/7", label: "Åpent hele døgnet" },
  { number: "429,-", label: "Per måned, alt inkludert" },
  { number: "108", label: "Gratis parkeringsplasser" },
] as const;

export default function StatBand() {
  return (
    <div className="border-t border-b border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y divide-line sm:divide-y-0 sm:divide-x sm:divide-line">
          {stats.map((stat) => (
            <div key={stat.number} className="py-10 sm:py-12 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <div
                className="font-display font-medium text-ink leading-none"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontStretch: "125%",
                }}
              >
                {stat.number}
              </div>
              <div className="text-[13px] text-stone mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
