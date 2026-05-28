import { test, expect } from '@playwright/test';

const PAGES = [
  '/',
  '/about/',
  '/contact/',
  '/accessibility/',
  '/privacy-policy/',
  '/holistic-wellness/',
  '/optical-wellness/',
  '/services/blister-packaging/',
  '/services/free-delivery/',
  '/services/medication-reviews/',
  '/services/minor-ailments/',
  '/services/preventive-care/',
  '/services/refills/',
  '/services/transfers/',
  '/who-we-help/seniors/',
  '/who-we-help/students/',
];

for (const path of PAGES) {
  test(`smoke: ${path}`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response, `no response for ${path}`).not.toBeNull();
    expect(response!.status(), `expected 200 for ${path}`).toBe(200);

    const h1 = page.locator('h1').first();
    await expect(h1, `expected an <h1> on ${path}`).toBeVisible();
    const h1Text = (await h1.textContent())?.trim() ?? '';
    expect(h1Text.length, `expected non-empty <h1> on ${path}`).toBeGreaterThan(0);

    const title = await page.title();
    expect(title, `expected <title> to contain "Four Winds Roots Pharmacy" on ${path}`).toContain(
      'Four Winds Roots Pharmacy',
    );
  });
}
