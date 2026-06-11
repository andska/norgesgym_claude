import IndexList from "./IndexList";

const items = [
  {
    number: "01",
    keyword: "Døgnåpent",
    description: "Membro-appen gir deg tilgang hele døgnet, 365 dager i året.",
  },
  {
    number: "02",
    keyword: "Trygt å trene",
    description: "Senteret er videoovervåket, og du har alltid telefonkontakt med oss.",
  },
  {
    number: "03",
    keyword: "Gratis parkering",
    description: "108 plasser rett utenfor døren. Maks høyde 2,20 meter.",
  },
  {
    number: "04",
    keyword: "Ingen bindingstid",
    description: "429 kr i måneden og én måneds oppsigelse. Ferdig.",
  },
] as const;

export default function DerforNorgesgym() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <p className="text-[12px] tracking-[0.08em] text-gravel mb-8">
          Derfor Norgesgym
        </p>
        <IndexList items={items} />
      </div>
    </section>
  );
}
