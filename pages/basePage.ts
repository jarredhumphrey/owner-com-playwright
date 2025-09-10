import { Locator, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly navBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navBar = page.getByRole("navigation");
  }

  async navigateToTab(tabName: string): Promise<void> {
    await this.navBar.getByRole("link", { name: tabName }).click();
  }

  async hoverTab(tabName: string): Promise<void> {
    await this.navBar.getByRole("button", { name: tabName }).hover();
  }

  async navigateToTabSubLink(tabName: string, linkName: string): Promise<void> {
    const tabButton = await this.page.getByRole("button", { name: tabName });
    const subLinksList = await this.page
      .locator(".nav_menu-dropdown")
      .filter({ has: tabButton })
      .locator("ul");

    await this.hoverTab(tabName);
    await subLinksList.getByRole("link", { name: linkName }).click();
  }

  async selectFromDropdown(locator: Locator, option: string): Promise<void> {
    await locator.click();
    await this.page.locator("li", { hasText: option }).click();
  }
}
