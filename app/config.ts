export const LINKS = {
  // TODO: replace with the direct contract template link from Membro/iBooking
  // once the kontraktsmal is created (per iBooking support, case 39991).
  innmelding: "https://norgesgymmoss.ibooking.no/nettinnmelding",
  minSide: "https://norgesgymmoss.ibooking.no/minside/",
  avtalegiro: "https://norgesgymmoss.ibooking.no/atg",
  googleMaps:
    "https://www.google.com/maps/search/Norgesgym+Solgaard+Skog+15+Moss",
  // TODO: confirm exact Membro store URLs before launch
  appStore: "https://apps.apple.com/us/app/membro/id1542602956",
  googlePlay:
    "https://play.google.com/store/apps/details?id=no.ibooking.membroapp",
};

export const FLAGS = {
  heroPhoto: false,
  isPreview: process.env.NEXT_PUBLIC_PREVIEW === "true",
};

// Summer reception period. This reduces STAFFED RECEPTION ONLY — member access
// via the Membro app is unchanged 24/7 the entire period. Adjust the two dates
// (MM-DD, both inclusive) to move the window next year.
// `from` is set so the note publishes immediately (ahead of the 23 June staffing
// change); `to` is what auto-removes it after 9 August.
export const SUMMER_HOURS = {
  from: "06-22",
  to: "08-09",
  label: "Sommertid 23. juni–9. august",
  text: "Bemannet resepsjon kun mandager 17:00–19:00. Medlemmer kommer inn som vanlig med Membro-appen, hele døgnet, hele sommeren.",
};

// True when `date` falls within the SUMMER_HOURS window (inclusive). Compares
// month/day only, so the window recurs every year without touching the year.
// String comparison is safe because both bounds are zero-padded MM-DD and the
// window does not wrap across new year.
export function isSummerReception(date = new Date()): boolean {
  const mmdd = `${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;
  return mmdd >= SUMMER_HOURS.from && mmdd <= SUMMER_HOURS.to;
}
