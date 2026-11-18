// Données en dur de l'itération 1 : pas de connexion, on incarne un persona (règle de la passation).
export type Persona = {
  id: string;
  nom: string;
  role: string;
  parcours: "BBA" | "BIB";
  moduleActif: string;
  prochainAtelier: string;
};

export const personas: Persona[] = [
  {
    id: "fatima",
    nom: "Fatima",
    role: "BURN'ette en reconstruction",
    parcours: "BBA",
    moduleActif: "Comprendre le burn-out",
    prochainAtelier: "Atelier respiration et ancrage",
  },
  {
    id: "sophie",
    nom: "Sophie",
    role: "BURN'ette en remobilisation",
    parcours: "BIB",
    moduleActif: "Se remobiliser professionnellement",
    prochainAtelier: "Atelier bilan de compétences",
  },
];

export function getPersona(id: string): Persona | undefined {
  return personas.find((persona) => persona.id === id);
}
