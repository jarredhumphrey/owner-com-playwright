import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/basePage";

test.describe("Owner.com navigation", () => {
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await page.goto("/");
  });

  test("Navigate between product links", async ({ page }) => {
    await basePage.navigateToTabSubLink("Product", "Website Builder");
    expect.soft(page).toHaveURL("/restaurant-website-ai", { timeout: 5000 });

    await basePage.navigateToTabSubLink("Product", "Automated Marketing");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/automatic-marketing", { timeout: 5000 });

    await basePage.navigateToTabSubLink("Product", "Zero-Commission Delivery");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/delivery", { timeout: 5000 });

    await basePage.navigateToTabSubLink("Product", "Custom Mobile App");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/branded-apps", { timeout: 5000 });

    await basePage.navigateToTabSubLink("Product", "Online Ordering");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/online-ordering", { timeout: 5000 });

    await basePage.navigateToTabSubLink("Product", "Loyalty Program");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/loyalty-rewards", { timeout: 5000 });
  });

  test("Navigate to pricing tab", async ({ page }) => {
    await basePage.navigateToTab("Pricing");
    await page.waitForLoadState();
    expect(page).toHaveURL("/pricing");
  });

  test("Navigate to how it works tab", async ({ page }) => {
    await basePage.navigateToTab("How it works");
    await page.waitForLoadState();
    expect(page).toHaveURL("/how-owner-works");
  });

  test("Navigate between company links", async ({ page }) => {
    await basePage.navigateToTabSubLink("Company", "Our Story");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/our-story");

    await basePage.navigateToTabSubLink("Company", "Careers");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/careers");

    await basePage.navigateToTabSubLink("Company", "Leadership");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/leadership");

    await basePage.navigateToTabSubLink("Company", "Press");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/press");

    await basePage.navigateToTabSubLink("Company", "Reviews");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/reviews");

    await basePage.navigateToTabSubLink("Company", "Product Releases");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/releases");

    await basePage.navigateToTabSubLink("Company", "Partner with Owner");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/partner-request");
  });

  test("Navigate between resources links", async ({ page }) => {
    const newTabPromise = page.waitForEvent("popup");

    await basePage.navigateToTabSubLink("Resources", "Blog");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/blog");

    await basePage.navigateToTabSubLink("Resources", "Help Center");
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();
    expect.soft(newTab.url()).toContain("help.owner.com");
    await newTab.close();

    await basePage.navigateToTabSubLink("Resources", "Case Studies");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/case-studies");

    await basePage.navigateToTabSubLink("Resources", "Support Center");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/support");

    await basePage.navigateToTabSubLink("Resources", "Compare Owner");
    await page.waitForLoadState();
    expect.soft(page).toHaveURL("/comparison");
  });
});
