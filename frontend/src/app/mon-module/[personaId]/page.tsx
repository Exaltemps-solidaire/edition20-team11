import Link from "next/link";
import { notFound } from "next/navigation";
import { getPersona, personas } from "@/data/personas";
import styles from "./page.module.css";

export function generateStaticParams() {
  return personas.map((persona) => ({ personaId: persona.id }));
}

export default async function MonModule({
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
        <Link href={`/tableau-de-bord/${persona.id}`} className={styles.retour}>
          ← Retour au tableau de bord
        </Link>
        <h1>{persona.moduleActif}</h1>
        <ul className={styles.ateliers}>
          {persona.ateliersModule.map((atelier) => (
            <li key={atelier.nom} className={styles.atelier}>
              <span>{atelier.nom}</span>
              <span
                className={`${styles.statut} ${
                  atelier.statut === "fait" ? styles.fait : styles.aVenir
                }`}
              >
                {atelier.statut}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
