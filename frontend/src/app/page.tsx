import Link from "next/link";
import styles from "./page.module.css";
import { personas } from "@/data/personas";

export default function QuiEtesVous() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Qui êtes-vous ?</h1>
        <p>Choisissez la personne que vous incarnez pour cette démonstration.</p>
        <ul>
          {personas.map((persona) => (
            <li key={persona.id}>
              <Link href={`/tableau-de-bord/${persona.id}`}>
                {persona.nom} — {persona.role}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
