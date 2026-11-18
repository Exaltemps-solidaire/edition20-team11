# Déploiement

Application pour **L'BURN** (Les BURN'ettes), qui accompagne les femmes touchées par le
burn-out : cette version donne à chaque adhérente un point d'entrée unique pour retrouver
où elle en est dans son parcours.

## Services

- `frontend` (port 8080 sur la VM, port 80 du conteneur) : Next.js en export statique,
  servi par nginx. **Exposé au public.**
- `api` (port 8081 sur la VM) : Node, sans dépendance. Pour l'instant, seules les routes
  `/health` et `/sante` répondent ; aucune route métier n'est encore branchée.

## Services externes appelés

Aucun à ce stade (itération 1) : toutes les données du tableau de bord sont en dur dans
`frontend/src/data/personas.ts`. Rien ne casse si un service externe tombe, puisqu'aucun
n'est encore appelé.

## Connu comme fragile ou inachevé

- Pas de persistance : les personas et leur progression sont des données statiques,
  perdues au redéploiement (il n'y en a pas à perdre, elles sont codées en dur).
- Pas d'écran "Mon module", pas de fiche atelier, pas de réservation, pas de rappel email :
  prévus aux itérations suivantes (voir `ITERATIONS.md`).
- Pas de connexion : conforme à la passation, qui l'exclut explicitement pour cette version.

## Contact

Équipe 11 (`team11`), côté association : L'BURN (Les BURN'ettes), cf. `passation/contexte/association.md`.
