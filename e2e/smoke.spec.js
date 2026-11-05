import { test, expect } from "@playwright/test";

test("la home carga y permite navegar a proyectos", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /Desarrolladora Full Stack/i })
  ).toBeVisible();

  await page.getByRole("link", { name: "Proyectos" }).first().click();

  await expect(page).toHaveURL(/\/projects$/);
  await expect(
    page.getByRole("heading", { name: "Mis Proyectos" })
  ).toBeVisible();
});

test("el panel admin redirige al login sin sesión", async ({ page }) => {
  await page.goto("/admin");

  await expect(page).toHaveURL(/\/login$/);
  await expect(
    page.getByRole("heading", { name: "Bienvenida de nuevo" })
  ).toBeVisible();
});

test("el formulario de contacto valida en cliente", async ({ page }) => {
  await page.goto("/");

  const contact = page.locator("#contact");

  await contact.scrollIntoViewIfNeeded();
  await contact.getByRole("button", { name: "Enviar mensaje" }).click();

  await expect(
    page.getByText("El nombre es obligatorio.")
  ).toBeVisible();
});

test("la página de contacto muestra el formulario y los datos", async ({ page }) => {
  await page.goto("/contact");

  await expect(
    page.getByRole("heading", { name: /Hablemos de tu/i })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Enviar propuesta" })
  ).toBeVisible();
  await expect(
    page.getByText("elenaalmansacampos@gmail.com")
  ).toBeVisible();
});
