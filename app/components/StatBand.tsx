const stats = [
  { number: "24/7", label: "Døgnåpent" },
  { number: "429,-", label: "Per måned, uten binding" },
  { number: "Gratis", label: "Parkering rett utenfor" },
];

export default function StatBand() {
  return (
    <div className="border-t border-b border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`bg-white py-8 px-5 lg:px-8 ${i === 0 ? "sm:pl-0" : ""} ${i === 2 ? "sm:pr-0" : ""}`}
            >
              <div
                className="font-display font-medium text-ink leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontStretch: "125%" }}
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
