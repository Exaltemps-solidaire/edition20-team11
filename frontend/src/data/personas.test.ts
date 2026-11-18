import { describe, expect, it } from "vitest";
import { getPersona } from "./personas";

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
