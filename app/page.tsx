import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import StatBand from "@/app/components/StatBand";
import DerforNorgesgym from "@/app/components/DerforNorgesgym";
import Fasiliteter from "@/app/components/Fasiliteter";
import Pris from "@/app/components/Pris";
import Sporsmal from "@/app/components/Sporsmal";
import Kontakt from "@/app/components/Kontakt";

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] bg-ink text-white text-[14px] font-medium rounded-btn px-4 py-2"
      >
        Hopp til innhold
      </a>
      <Header />
      <main id="main">
        <Hero />
        <StatBand />
        <DerforNorgesgym />
        <Fasiliteter />
        <Pris />
        <Sporsmal />
      </main>
      <Kontakt />
    </>
  );
}
