const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");
const {
  email,
  password,
  incorrectEmail,
  incorrectPassport,
} = require("../user");

test("Failed authorization", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', incorrectEmail);
  await page.fill('[placeholder="Пароль"]', incorrectPassport);
  await page.click('[data-testid="login-submit-btn"]');
  const error = await page.locator('[data-testid="login-error-hint"]');
  await expect(error).toHaveText("Вы ввели неправильно логин или пароль");
  await page.screenshot({ path: "screenshotFailed.png", fullPage: true });
  browser.close();
}, 60000);

test("Successful authorization", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', email);
  await page.fill('[placeholder="Пароль"]', password);
  await page.click('[data-testid="login-submit-btn"]');
  const pageTitle = await page.innerText("h2");
  expect(pageTitle).toContain("Моё обучение");
  await page.screenshot({ path: "screenshotSuccessful.png", fullPage: true });
  browser.close();
}, 60000);
