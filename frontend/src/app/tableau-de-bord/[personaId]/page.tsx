import Link from "next/link";
import { notFound } from "next/navigation";
import { getPersona, personas } from "@/data/personas";

export function generateStaticParams() {
  return personas.map((persona) => ({ personaId: persona.id }));
}

export default async function TableauDeBord({
  params,
}: {
  params: Promise<{ personaId: string }>;
}) {
  const { personaId } = await params;
  const persona = getPersona(personaId);
  if (!persona) {
    notFound();
  }

  return (
    <main>
      <p>
        <Link href="/">Changer de persona</Link>
      </p>
      <h1>Où j&apos;en suis, {persona.nom}</h1>
      <p>Parcours en cours : {persona.parcours}</p>
      <p>Module actif : {persona.moduleActif}</p>
      <p>Prochain atelier accessible : {persona.prochainAtelier}</p>
    </main>
  );
}
