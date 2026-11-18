// Données en dur de l'itération 1 : pas de connexion, on incarne un persona (règle de la passation).
export type Atelier = {
  nom: string;
  statut: "fait" | "à venir";
};

export type Persona = {
  id: string;
  nom: string;
  role: string;
  parcours: "BBA" | "BIB";
  moduleActif: string;
  prochainAtelier: string;
  ateliersModule: Atelier[];
};

export const personas: Persona[] = [
  {
    id: "fatima",
    nom: "Fatima",
    role: "BURN'ette en reconstruction",
    parcours: "BBA",
    moduleActif: "Comprendre le burn-out",
    prochainAtelier: "Atelier respiration et ancrage",
    ateliersModule: [
      { nom: "Qu'est-ce que le burn-out ?", statut: "fait" },
      { nom: "Reconnaître les signaux d'alerte", statut: "fait" },
      { nom: "Atelier respiration et ancrage", statut: "à venir" },
      { nom: "Comprendre son rythme de récupération", statut: "à venir" },
    ],
  },
  {
    id: "sophie",
    nom: "Sophie",
    role: "BURN'ette en remobilisation",
    parcours: "BIB",
    moduleActif: "Se remobiliser professionnellement",
    prochainAtelier: "Atelier bilan de compétences",
    ateliersModule: [
      { nom: "Faire le point sur son parcours", statut: "fait" },
      { nom: "Atelier bilan de compétences", statut: "à venir" },
      { nom: "Préparer son retour à l'emploi", statut: "à venir" },
    ],
  },
];

export function getPersona(id: string): Persona | undefined {
  return personas.find((persona) => persona.id === id);
}

export function getAteliersModule(id: string): Atelier[] | undefined {
  return getPersona(id)?.ateliersModule;
}
