# Plan d'itérations — L'BURN

**Plan validé le 2026-11-18** (tel quel, par les cadreurs).

**Source du plan** : proposé par l'agent (aucun plan d'itérations trouvé dans la passation —
ni fichier `cadrage/*iteration*`, ni clé `iterations` dans `passation.json`).

**Temps restant annoncé** : 60 minutes, question posée le 2026-11-18 à 16:44 CET.
**Durée du tour de test de l'équipe** : 10 minutes (valeur par défaut, le développeur ne savait pas).

**Itération 1 — temps restant redemandé** : 45 minutes, question posée le 2026-11-18 à
17:02 CET. ⚠️ Capacité des 2 itérations détaillées (25 + 22 = 47 min) dépasse de 2 minutes
le temps annoncé : marge quasi nulle, l'itération 2 sera peut-être à raccourcir ou à
reporter selon ce que l'itération 1 consomme réellement.

**Capacité** : chaque itération coûte au moins codage (≤10 min) + publication (~5 min) +
tour de test (10 min) ≈ 25 min. Avec 60 minutes, **2 itérations tiennent confortablement**
(50 min), une 3ᵉ ne tient pas (75 min > 60). ✂️ Le plan ci-dessous ne détaille donc que
2 itérations ; le reste du programme de l'équipe (`Fiche atelier et réservation`,
`Rappel email`) passe en backlog « À venir » et ne sera pas construit sauf si le temps
restant est revu à la hausse à la fin de l'itération 2.

⚠️ L'itération 1 porte en plus la charge unique de premier déploiement (démarrage de la
plateforme, création de la base, écriture du `podman-compose.yml`, premier build/push des
deux images) : ce temps-là s'ajoute au budget de 10 minutes de **codage**, il ne le
consomme pas, mais il rallonge d'autant le délai réel avant publication. Dis-le au
développeur si la plateforme n'est pas déjà en cours de démarrage.

**Ordre de priorité suivi** : `2-idees-priorisees.md` et `matiere/arbitrages.md` sont vides
pour cette séance (« pas encore produit » / « aucun vote consolidé ») ; l'ordre retenu est
donc celui de `PASSATION.md` § *Notre plan de livraison* : tableau de bord → vue du
module → fiche atelier et réservation → rappel email.

**Hors périmètre du programme** (rappel, cf. `matiere/arbitrages.md` section PRD « Hors
périmètre ») : connexion/comptes, back-office, modèle de paiement, modules 5-6 de BIB,
suivi de progression avancé, ACTIV' et Sentinelle, tout contenu médical/juridique.

---

## Itération 1 : la BURN'ette choisit son persona et voit son tableau de bord

- **Dans le périmètre** :
  - écran « Qui êtes-vous ? » : liste de personas en dur (une BURN'ette en reconstruction
    sur le parcours BBA, une en remobilisation sur BIB), sélection d'un persona ;
  - écran « Tableau de bord » : parcours en cours, module actif, prochain atelier
    accessible, pour le persona choisi — données en dur ;
  - bouton de changement de persona visible en haut du tableau de bord ;
  - squelette de déploiement : `.env.example`, `DEPLOIEMENT.md`, `podman-compose.yml`,
    application en ligne sur 8080/8081 avec `/health` et `/sante` opérationnels.
- **Hors périmètre** : vue du module, fiche atelier, réservation, email de rappel,
  données réelles depuis une base ou l'API (tout est en dur côté front pour cette
  itération).
- **Critères d'acceptation** :
  - Étant donné l'écran « Qui êtes-vous ? », quand je choisis un persona, alors je vois
    son tableau de bord avec son module actif et son prochain atelier.
  - Étant donné le tableau de bord affiché, quand je clique sur le bouton de changement
    de persona, alors je reviens à l'écran « Qui êtes-vous ? ».
  - Étant donné l'application déployée, quand j'appelle `/health` et `/sante` sur le
    port 8080, alors je reçois `200` avec un corps vérifiable (pas seulement le code).
- **Hypothèse de l'équipe couverte** : aucune — `cadrage/5-hypotheses.md` est vide pour
  cette séance.
- **Codage estimé** : 10 minutes (à la limite : c'est le squelette, deux écrans neufs).
- **Fichiers prévus** (légèrement au-dessus de 5, justifié par le squelette de
  déploiement obligatoire en itération 1) :
  - `frontend/src/data/personas.ts` (données en dur + fonction pure de lecture)
  - `frontend/src/app/page.tsx` (écran « Qui êtes-vous ? »)
  - `frontend/src/app/tableau-de-bord/page.tsx` (écran tableau de bord)
  - `.env.example`
  - `DEPLOIEMENT.md`
  - `podman-compose.yml`
- **Tests unitaires prévus** : 1 à 3, sur la fonction pure qui retourne le tableau de
  bord d'un persona (persona connu → bon module/atelier ; persona inconnu → cas géré).
- **Étapes ajoutées à la démo** : ouvrir l'application, choisir un persona, vérifier que
  le tableau de bord affiche son module actif et son prochain atelier.
- **Bilan** :
  - **Durée de codage réelle** : 9 minutes (chrono `.iterations/1.debut` → `.iterations/1.fin`),
    pas de dépassement du budget de 10 minutes.
  - **Blocage hors codage (déploiement)** : le premier `podman build` du front a buté sur la
    limite de pull anonyme de Docker Hub pour `nginx:1.27-alpine` (~20 minutes perdues en
    tentatives). Levé par le développeur via `podman login docker.io` avec son compte
    personnel. Signalé ici pour la suite : si ça revient, se reconnecter plutôt que
    réessayer en boucle.
  - **Critères d'acceptation** : les 3 sont satisfaits (vérifiés en local sur
    `localhost:8080` et par la démo Playwright).
  - **Reporté** : rien — tout le périmètre prévu est livré.
  - **Ce que le harnais a bloqué ou refusé** : rien ; `npm test` et
    `verifier-deployabilite.sh` passent du premier coup, le signal à PM Lab est passé.
  - **Modifications** :
    - `frontend/src/data/personas.ts` — données en dur (2 personas) + `getPersona()`,
      fonction pure testée — sert les 3 critères.
    - `frontend/src/data/personas.test.ts` — 2 tests unitaires sur `getPersona()`.
    - `frontend/src/app/page.tsx` — écran « Qui êtes-vous ? », remplace le gabarit
      Next.js par défaut — sert le critère 1.
    - `frontend/src/app/tableau-de-bord/[personaId]/page.tsx` — écran tableau de bord en
      route dynamique statique (`generateStaticParams`), plutôt que le
      `tableau-de-bord/page.tsx` prévu au plan : plus simple à exporter statiquement sans
      état client — sert les critères 1 et 2.
    - `api/Dockerfile`, `frontend/Dockerfile` — image de base qualifiée en
      `docker.io/library/...` (non prévu au plan, imposé par le `CLAUDE.md` du serveur :
      la résolution de nom court échoue hors terminal interactif).
    - `.env.example`, `DEPLOIEMENT.md`, `podman-compose.yml` — squelette de déploiement.
    - `e2e/demo.spec.ts` — 2 étapes ajoutées (choix du persona, vérification du tableau de
      bord), hors DoD.

## Itération 1bis : charte graphique L'BURN sur les écrans existants

**Origine** : demande du développeur en cours de hackathon, hors programme initial —
« utiliser la charte graphique de https://lesburn-ettes.com/, le tableau de bord va être
intégré dedans ». Taillée en itération ici au lieu d'être codée directement.

⚠️ **Reprioritisation** : insérée avant l'« Itération 2 : Mon module » (qui devient
Itération 3), à la demande du développeur. Les cadreurs n'ont pas validé ce changement
d'ordre — à confirmer avec eux au prochain tour de test.

❓ **Ambiguïté résolue avec le développeur** : « intégré dedans » visait au départ aussi
une préparation à l'embarquement (CSS scoping, retrait d'un header/footer propre) en plus
de la charte. ✂️ Coupé : avec ~15 minutes restantes annoncées le 2026-11-18 à 17:40 CET
(sous le plancher de ~25 min que le plan pose pour une itération complète), la préparation
à l'intégration et l'écran « Mon module » sont reportés en backlog ; cette itération ne
porte que la charte visuelle.

- **Dans le périmètre** :
  - couleurs, typographies (`Archivo Black` pour les titres, `Libre Franklin` pour le
    corps, auto-hébergées via `next/font/google`, pas de CDN externe) et palette de la
    charte L'BURN sur les 2 écrans existants (« Qui êtes-vous ? » et tableau de bord) ;
  - couleurs extraites des variables `--gcid-*` du site vitrine (`#dc3129` primaire,
    `#ffb4aa` secondaire, `#23262f` texte, `#fff8f4` fond), pas des presets Gutenberg
    génériques repérés dans la même page.
- **Hors périmètre** : logo de l'association (passerait par l'API, pas par une URL
  externe — reporté), écran « Mon module », préparation à l'embarquement (scoping CSS,
  retrait de header/footer).
- **Critères d'acceptation** :
  - Étant donné l'écran « Qui êtes-vous ? », quand je le charge, alors les boutons de
    persona et les titres utilisent la palette et les polices de la charte.
  - Étant donné le tableau de bord, quand je le charge, alors il utilise la même palette
    et les mêmes polices.
  - Étant donné l'application déployée, quand j'inspecte le CSS servi, alors les polices
    sont auto-hébergées (aucun appel à `fonts.googleapis.com`).
- **Hypothèse de l'équipe couverte** : aucune — dossier d'hypothèses vide.
- **Codage estimé** : 5 minutes (CSS et polices uniquement, pas de nouvelle logique).
- **Fichiers prévus** :
  - `frontend/src/app/layout.tsx` (chargement des polices)
  - `frontend/src/app/globals.css` (variables de couleur, typographie des titres)
  - `frontend/src/app/page.module.css`
  - `frontend/src/app/tableau-de-bord/[personaId]/page.module.css` (nouveau)
  - `frontend/src/app/tableau-de-bord/[personaId]/page.tsx` (classes CSS)
- **Tests unitaires prévus** : aucun — balisage et style purs, aucune logique métier
  ajoutée (règle explicite de `docs/testing-guidelines.md`).
- **Étapes ajoutées à la démo** : aucune — la démo existante couvre déjà les deux écrans
  concernés, son contenu ne change pas.
- **Bilan** :
  - **Durée de codage réelle** : 1 minute.
  - **Critères d'acceptation** : les 3 sont satisfaits — vérifié en relisant le CSS
    exporté (`dc3129`/`ffb4aa` présents), et en confirmant que les polices sont servies
    en `.woff2` locaux (`/_next/static/media/`), aucun appel externe.
  - **Reporté** : logo de l'association, écran « Mon module » (→ Itération 3 ci-dessous),
    préparation à l'embarquement (→ backlog, non détaillé).
  - **Ce que le harnais a bloqué ou refusé** : rien ; `npm test` passe (inchangé, aucune
    nouvelle logique), `verifier-deployabilite.sh` ne signale aucune borne.
  - **Modifications** :
    - `frontend/src/app/layout.tsx` — polices `Archivo Black` / `Libre Franklin` via
      `next/font/google` (auto-hébergées), remplace `Geist`/`Geist Mono` — sert le
      critère 3.
    - `frontend/src/app/globals.css` — variables de couleur de la charte, polices des
      titres/corps, suppression du mode sombre générique du gabarit (hors charte,
      inutilisé) — sert les critères 1 et 2.
    - `frontend/src/app/page.module.css` — boutons de persona en rouge primaire avec
      survol saumon clair — sert le critère 1.
    - `frontend/src/app/tableau-de-bord/[personaId]/page.module.css` (nouveau) — cartes
      module actif/prochain atelier avec liseré de la couleur primaire — sert le
      critère 2.
    - `frontend/src/app/tableau-de-bord/[personaId]/page.tsx` — application des classes
      du module CSS — sert le critère 2.

## Itération 3 (anciennement 2) : la BURN'ette consulte les ateliers de son module actif

- **Dans le périmètre** :
  - écran « Mon module », accessible depuis le tableau de bord (clic sur le module
    actif) ;
  - liste des ateliers socles du module, chacun marqué « fait » ou « à venir » (pas de
    score ni de pourcentage — règle de l'association) ;
  - retour vers le tableau de bord.
- **Hors périmètre** : fiche atelier détaillée (vidéo, support), réservation, email de
  rappel, données réelles depuis une base.
- **Critères d'acceptation** :
  - Étant donné le tableau de bord d'un persona, quand je clique sur son module actif,
    alors j'arrive sur « Mon module » avec la liste de ses ateliers.
  - Étant donné cette liste, alors chaque atelier affiche « fait » ou « à venir », sans
    score ni pourcentage.
  - Étant donné l'écran « Mon module », quand je clique sur retour, alors je reviens au
    tableau de bord du même persona.
- **Hypothèse de l'équipe couverte** : aucune — dossier d'hypothèses vide.
- **Codage estimé** : 7 minutes.
- **Fichiers prévus** :
  - `frontend/src/data/personas.ts` (étendu : ateliers par module)
  - `frontend/src/app/mon-module/page.tsx`
- **Tests unitaires prévus** : 1 à 2, sur la fonction pure qui calcule la liste des
  ateliers d'un module avec leur statut fait/à venir.
- **Étapes ajoutées à la démo** : depuis le tableau de bord, cliquer sur le module actif,
  vérifier la liste des ateliers avec leur statut.
- **Bilan** : _à remplir en fin d'itération._

---

## À venir (non détaillé, backlog ordonné)

1. Fiche atelier : contenu de l'atelier (vidéo/support) et sessions disponibles.
2. Réservation en un clic (mécanisme existant, à documenter avec le développeur — hors
   périmètre technique connu à ce stade).
3. Rappel par email (Brevo) avant la session réservée.
4. (Si le temps le permet encore) rendre les données du tableau de bord et du module
   réelles, via l'API, plutôt qu'en dur côté front.
5. Logo de l'association sur les écrans (reporté de l'Itération 1bis — passerait par une
   route de l'API, pas par une URL externe, cf. `docs/guidelines-deploiement.md` §3).
6. Préparation du tableau de bord à l'embarquement dans `lesburn-ettes.com` (reporté de
   l'Itération 1bis — scoping CSS, retrait d'un header/footer propre à l'app). ❓ À
   cadrer avec les cadreurs : iframe, web component, ou autre mécanisme ?
