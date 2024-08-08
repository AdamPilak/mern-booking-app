import { expect, test } from "@playwright/test"

const UI_URL = "http://localhost:5173"

test.beforeEach(async ({ page }) => {
	await page.goto(UI_URL)

	await page.getByRole("link", { name: "Sign In" }).click()

	await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible()

	await page.locator("[name=email]").fill("1@1.com")
	await page.locator("[name=password]").fill("qazwsx")

	await page.getByRole("button", { name: "Login" }).click()

	await expect(page.getByText("Signed In!")).toBeVisible()
})

test("Should show hotel search results", async ({ page }) => {
	await page.goto(UI_URL)

	await page.getByPlaceholder("Where are you going?").fill("Test City")
	await page.getByRole("button", { name: "Search" }).click()

	await expect(page.getByText("Hotels found in Test City")).toBeVisible()
	await expect(page.getByRole("link", { name: "Test Hotel" })).toBeVisible()
})

test("Should show hotel detils", async ({page}) => {
	await page.goto(UI_URL)

	await page.getByPlaceholder("Where are you going?").fill("Test City")
	await page.getByRole("button", { name: "Search" }).click()

	await page.getByRole("link", { name: "Test Hotel" }).click()
	await expect(page).toHaveURL(/hotel-details/)
	await expect(page.getByRole("button", {name: "Book Now"})).toBeVisible()
})