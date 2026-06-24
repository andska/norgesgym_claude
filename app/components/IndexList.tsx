interface IndexItem {
  number: string;
  keyword: string;
  keywordHref?: string;
  description: React.ReactNode;
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
            <span className="text-[13px] text-signal">{item.number}</span>
            <span className="font-display font-medium text-[18px] leading-snug text-ink">
              {item.keywordHref ? (
                <a
                  href={item.keywordHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-signal hover:text-signal transition-colors duration-150"
                >
                  {item.keyword}
                </a>
              ) : (
                item.keyword
              )}
            </span>
            <span className="text-[14px] text-stone leading-[1.55]">
              {item.description}
            </span>
          </div>
          {/* Mobile */}
          <div className="sm:hidden">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[13px] text-signal flex-shrink-0 w-7">{item.number}</span>
              <span className="font-display font-medium text-[18px] leading-snug text-ink">
                {item.keywordHref ? (
                  <a
                    href={item.keywordHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 decoration-signal hover:text-signal transition-colors duration-150"
                  >
                    {item.keyword}
                  </a>
                ) : (
                  item.keyword
                )}
              </span>
            </div>
            <p className="pl-7 text-[14px] text-stone leading-[1.55]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
