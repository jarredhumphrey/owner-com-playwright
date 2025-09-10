import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { RequestDemoPage } from "../pages/requestDemo";

test.describe("Request Demo", () => {
  let homePage: HomePage;
  let requestDemoPage: RequestDemoPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    requestDemoPage = new RequestDemoPage(page);
    await page.goto("/");
  });

  test("Request a demo flow", async ({ page }) => {
    await homePage.elements.requestDemoButton.click();

    await requestDemoPage.selectFromDropdown(
      requestDemoPage.elements.roleField,
      "I'm a restaurant owner or manager"
    );

    await requestDemoPage.elements.firstNameField.fill("Test");
    await requestDemoPage.elements.lastNameField.fill("User");
    await requestDemoPage.elements.emailField.fill("testUser@test.com");
    await requestDemoPage.elements.phoneNumberField.fill("5551234567");

    await requestDemoPage.elements.restaurantNameField.fill("Pho");
    await page.locator(".pac-item").first().click();

    await requestDemoPage.elements.numberOfLocationsField.fill("12");

    await requestDemoPage.selectFromDropdown(
      requestDemoPage.elements.referralField,
      "US Foods"
    );

    await requestDemoPage.elements.smsOptInCheckbox.check();

    // Asserting the text on the submit button here instead of clicking so I don't flood your inbox with demo requests.
    expect(requestDemoPage.elements.submitButton).toHaveText("Get a free demo");
  });
});
