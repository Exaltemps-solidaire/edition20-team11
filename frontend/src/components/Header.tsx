import styles from "./Header.module.css";

// Reproduit le header/nav de https://lesburn-ettes.com/ (cf. maquette/). Liens
// décoratifs : pas de pages vitrine équivalentes dans cette application.
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.brand}>
          <span className={styles.logo}>L&apos;BURN</span>
          <span className={styles.tagline}>La communauté des BURN&apos;ettes</span>
        </a>
        <nav aria-label="Navigation principale" className={styles.nav}>
          <a href="#">Accueil</a>
          <a href="#">Accompagnements</a>
          <a href="#">Prévention</a>
          <a href="#">Ressources</a>
          <a href="#" aria-current="page" className={styles.monEspace}>
            <span className={styles.avatar}>C</span>
            Mon espace
          </a>
        </nav>
      </div>
    </header>
  );
}
