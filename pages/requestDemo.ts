import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class RequestDemoPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Normally I would either request for data-testid tags to be placed on testable elements
  // or I would place them on needed elements myself. These locators are uglier since I
  // am working with what is already there.
  elements = {
    roleField: this.page.locator("#field-role").locator("span"),
    firstNameField: this.page.locator("input[id='first-name']"),
    lastNameField: this.page.locator("input[id='last-name']"),
    emailField: this.page.locator("input[id='email']"),
    phoneNumberField: this.page.locator("input[id='cellphone']"),
    restaurantNameField: this.page.locator("input[id='restaurant-name']"),
    numberOfLocationsField: this.page.locator(
      "input[id='number-of-locations']"
    ),
    referralField: this.page
      .locator(".form-field-wrapper", {
        has: this.page.getByText("How did you hear about us?"),
      })
      .locator("span"),
    smsOptInCheckbox: this.page.locator(".form-checkbox-icon"),
    submitButton: this.page.locator("a[id='submit_button']"),
  };
}
