import Image from "next/image";
import googlePlayBadge from "@/public/badges/google-play.png";
import appStoreBadge from "@/public/badges/app-store.svg";
import IndexList from "./IndexList";
import { LINKS } from "@/app/config";

const items = [
  {
    number: "01",
    keyword: "Meld deg inn på nett",
    keywordHref: LINKS.innmelding,
    description:
      "Det tar et par minutter. Du kan også velge drop-in for 120 kr hvis du bare vil trene en gang.",
  },
  {
    number: "02",
    keyword: "Last ned Membro-appen",
    description: (
      <>
        Din digitale nøkkel og medlemsportal.
        <span className="flex flex-wrap items-center gap-3 mt-3">
          <a
            href={LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hent Membro fra Google Play"
          >
            <Image
              src={googlePlayBadge}
              alt="Hent fra Google Play"
              className="h-[47px] w-auto"
            />
          </a>
          <a
            href={LINKS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Last ned Membro fra App Store"
          >
            <Image
              src={appStoreBadge}
              alt="Last ned fra App Store"
              className="h-[40px] w-auto"
            />
          </a>
        </span>
      </>
    ),
  },
  {
    number: "03",
    keyword: "Tren når du vil",
    description:
      "Senteret er døgnåpent året rundt.",
  },
];

export default function SlikFungererDet() {
  return (
    <section id="slik-fungerer-det" className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-[12px] tracking-[0.08em] text-gravel mb-8">
          Slik fungerer det
        </p>
        <h2
          className="font-display font-medium text-ink mb-10"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          Kom i gang
        </h2>

        <IndexList items={items} />
      </div>
    </section>
  );
}
