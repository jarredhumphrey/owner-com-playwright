import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  elements = {
    requestDemoButton: this.page
      .getByRole("banner")
      .getByRole("link", { name: "Get a free demo" }),
  };
}
