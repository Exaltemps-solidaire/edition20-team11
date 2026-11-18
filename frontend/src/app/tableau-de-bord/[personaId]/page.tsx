import Link from "next/link";
import { notFound } from "next/navigation";
import { getPersona, personas } from "@/data/personas";
import styles from "./page.module.css";

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
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/" className={styles.changerPersona}>
          ← Changer de persona
        </Link>
        <h1>Où j&apos;en suis, {persona.nom}</h1>
        <p>Parcours en cours : {persona.parcours}</p>
        <div className={styles.card}>Module actif : {persona.moduleActif}</div>
        <div className={styles.card}>
          Prochain atelier accessible : {persona.prochainAtelier}
        </div>
      </main>
    </div>
  );
}
