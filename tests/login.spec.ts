import { test, expect } from "@playwright/test";

test("Login page visual regression", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Take a full-page screenshot for comparison
  await page.screenshot({
    path: "tests/baseline-screenshots/login-page.png",
    fullPage: true,
  });

  // Optional: check that the login form is visible
  await expect(page.locator("#login-button")).toBeVisible();
});
