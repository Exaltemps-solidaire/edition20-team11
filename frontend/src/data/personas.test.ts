import { describe, expect, it } from "vitest";
import { getAteliersModule, getPersona } from "./personas";

describe("getPersona", () => {
  it("retourne le tableau de bord d'un persona connu", () => {
    const persona = getPersona("fatima");
    expect(persona?.moduleActif).toBe("Comprendre le burn-out");
    expect(persona?.prochainAtelier).toBe("Atelier respiration et ancrage");
  });

  it("retourne undefined pour un persona inconnu", () => {
    expect(getPersona("inconnue")).toBeUndefined();
  });
});

describe("getAteliersModule", () => {
  it("retourne les ateliers du module actif avec leur statut fait/à venir", () => {
    const ateliers = getAteliersModule("sophie");
    expect(ateliers).toHaveLength(3);
    expect(ateliers?.filter((a) => a.statut === "fait")).toHaveLength(1);
    expect(ateliers?.filter((a) => a.statut === "à venir")).toHaveLength(2);
  });

  it("retourne undefined pour un persona inconnu", () => {
    expect(getAteliersModule("inconnue")).toBeUndefined();
  });
});
