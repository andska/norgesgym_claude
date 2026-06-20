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
