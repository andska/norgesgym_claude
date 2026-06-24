const stats = [
  { number: "24/7", label: "Døgnåpent", shortLabel: "Døgnåpent" },
  { number: "429,-", label: "Per måned, uten binding", shortLabel: "Per måned" },
  { number: "Gratis", label: "Parkering rett utenfor", shortLabel: "Parkering" },
];

export default function StatBand() {
  return (
    <div className="border-t border-b border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-px bg-line">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-white py-6 sm:py-8 px-3 sm:px-5 lg:px-8 ${i === 0 ? "pl-0" : ""} ${i === 2 ? "pr-0" : ""}`}
            >
              <div
                className="text-stat-value font-display font-medium text-marine leading-tight"
                style={{ fontStretch: "125%" }}
              >
                {stat.number}
              </div>
              <div className="text-[13px] text-stone mt-2">
                <span className="sm:hidden">{stat.shortLabel}</span>
                <span className="hidden sm:inline">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
