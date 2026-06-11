interface IndexItem {
  number: string;
  keyword: string;
  description: string;
}

interface Props {
  items: readonly IndexItem[];
}

export default function IndexList({ items }: Props) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <div key={item.number} className="border-b border-line py-5">
          {/* Desktop */}
          <div className="hidden sm:grid sm:grid-cols-[48px_220px_1fr] sm:gap-4">
            <span className="text-[13px] text-gravel">{item.number}</span>
            <span className="font-display font-medium text-[18px] leading-snug text-ink">
              {item.keyword}
            </span>
            <span className="text-[14px] text-stone leading-[1.55]">
              {item.description}
            </span>
          </div>
          {/* Mobile */}
          <div className="sm:hidden">
            <div className="flex items-baseline gap-3 mb-1.5">
              <span className="text-[13px] text-gravel flex-shrink-0">{item.number}</span>
              <span className="font-display font-medium text-[18px] leading-snug text-ink">
                {item.keyword}
              </span>
            </div>
            <p className="text-[14px] text-stone leading-[1.55]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
