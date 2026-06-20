import { LINKS, REVIEWS } from "@/app/config";

// Social proof shown as plain linked text only — no stars graphic, no card, and
// deliberately NO aggregateRating JSON-LD (self-served rating markup is against
// Google's local-business guidelines).
export default function GoogleRating() {
  return (
    <div className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
        <p className="text-[14px] text-stone">
          {REVIEWS.score} av 5 på{" "}
          <a
            href={LINKS.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink font-medium hover:underline"
          >
            Google
          </a>
          , basert på {REVIEWS.count} vurderinger.
        </p>
      </div>
    </div>
  );
}
