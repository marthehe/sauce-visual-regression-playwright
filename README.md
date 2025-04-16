# 🧪 Sauce Labs Visual Regression Testing with Playwright

![CI](https://github.com/marthehe/sauce-visual-regression-playwright/actions/workflows/sauce-tests.yml/badge.svg)

This project demonstrates a complete cross-browser **visual regression testing pipeline** using:

- 🌐 [Playwright](https://playwright.dev/) for UI automation
- ☁️ [Sauce Labs](https://saucelabs.com/) for running tests across Chromium, Firefox, and Safari in the cloud
- 🔁 [GitHub Actions](https://github.com/features/actions) for CI/CD

It automates browser-based testing, captures screenshots, and runs every push or PR via GitHub Actions. You can catch visual changes before they affect real users.

---

## 🎯 Real-World Scenario

I created this project to solve a real problem: **detecting unexpected visual changes in user interfaces before they reach production**. While unit tests can catch logic errors, they won’t tell you if a button moved, a style broke, or a layout shifted. With visual regression testing across real browsers, I can spot those issues early and automatically.

---

## ✅ What It Does

- Runs Playwright tests across Chromium, Firefox, and WebKit
- Takes screenshots of key UI states (e.g. login screen)
- Uploads logs, videos, and screenshots to Sauce Labs
- CI/CD pipeline runs on every `push` or `pull request`

---

## 🛠️ Tech Stack

| Area              | Tool                      |
|-------------------|---------------------------|
| Automation        | Playwright                |
| Cloud Grid        | Sauce Labs (via saucectl) |
| CI/CD             | GitHub Actions            |
| Languages         | TypeScript, YAML          |
| Test Target       | saucedemo.com             |

---

## 🚀 Setup & Usage

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/sauce-visual-regression-playwright.git
cd sauce-visual-regression-playwright
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file (optional locally)
```
SAUCE_USERNAME=your-username
SAUCE_ACCESS_KEY=your-access-key
```

### 4. Run tests locally (optional)
```bash
npx playwright test
```

### 5. Run tests in Sauce Labs cloud
```bash
saucectl run
```

### 6. See results:
📺 https://app.eu-central-1.saucelabs.com/tests

---

## 🧪 Sample Test: Login Page Visual Check

```ts
await page.goto('https://www.saucedemo.com/');
await page.screenshot({ path: 'tests/baseline-screenshots/login-page.png', fullPage: true });
await expect(page.locator('#login-button')).toBeVisible();
```

---

## 🤖 GitHub Actions Workflow

Located at `.github/workflows/sauce-tests.yml`, this workflow:
- Installs Node & dependencies
- Injects Sauce Labs credentials
- Runs Sauce Labs tests on push, PR, or manual trigger

---
## 💡 Next Steps
- Add failure alerts via Slack or email
- Use GitHub Pages to publish screenshot diffs
- Expand tests to cover multiple app states (cart, filters, errors)

---
## 👩‍💻 Made with ☕ and 💙 by Marta


