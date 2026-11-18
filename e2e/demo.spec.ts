import { expect, test } from "@playwright/test";

// Démo du cas passant, de bout en bout. Chaque itération ajoute ses étapes (test.step).
test("Démo : le cas passant", async ({ page }) => {
  await test.step("J'ouvre l'application", async () => {
    await page.goto("/");
    await expect(page.locator("body")).toBeVisible();
  });

  await test.step("Je choisis mon persona", async () => {
    await page.getByRole("link", { name: /Fatima/ }).click();
    await expect(page.getByRole("heading", { name: /Où j'en suis, Fatima/ })).toBeVisible();
  });

  await test.step("Je vois mon tableau de bord", async () => {
    await expect(page.getByText("Comprendre le burn-out")).toBeVisible();
    await expect(page.getByText("Atelier respiration et ancrage")).toBeVisible();
  });

  await test.step("Je consulte les ateliers de mon module actif", async () => {
    await page.getByRole("link", { name: /Module actif/ }).click();
    await expect(page.getByRole("heading", { name: "Comprendre le burn-out" })).toBeVisible();
    await expect(page.getByText("Qu'est-ce que le burn-out ?")).toBeVisible();
  });

  await test.step("Je reviens au tableau de bord", async () => {
    await page.getByRole("link", { name: /Retour au tableau de bord/ }).click();
    await expect(page.getByRole("heading", { name: /Où j'en suis, Fatima/ })).toBeVisible();
  });
});
