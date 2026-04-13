# Sauce Demo E2E Automation

This project is an automated End-to-End (E2E) testing framework for the [Sauce Labs Swag Labs](https://www.saucedemo.com/) application. It is built using **Playwright** with **TypeScript**, following the **Page Object Model (POM)** pattern and utilizing custom fixtures for streamlined authentication.

## Technologies Used

* **Playwright**: Core E2E testing framework.
* **TypeScript**: For type-safe test development.
* **Allure Report**: Advanced reporting and visualization.
* **Cross-env**: Environment variable management across different platforms.
* **TSX**: For executing TypeScript utility scripts.

---

## Project Structure

* `auth/`: Stores authentication states and setup.
* `config/`: Contains environment-specific configuration files.
* `data/`: Test data and JSON mock objects.
* `fixture/`: Custom Playwright fixtures (e.g., `saucedemo.fixture`).
* `pages/`: Page Object Model (POM) classes.
* `tests/`: Test specifications and test suites.

---

## Configuration & Environment

The framework uses environment-specific files for configuration. **You must create the environment file manually before running the tests.**

**File Path:** `config/.env.dev`

Please ensure the file contains the following variables:

```env
BASEURL=[https://www.saucedemo.com/](https://www.saucedemo.com/)
HEADLESS=false
TIMEOUT=30000
BROWSER=chrome
WORKERS=1
username=standard_user
password=secret_sauce]
```

## Installation

1.Clone the repository:
```bash
git clone [https://github.com/marcosn3t0/sauce_demo.git](https://github.com/marcosn3t0/sauce_demo.git)
cd sauce_demo
```

2.Install dependencies:
```bash
npm install
```

3.Install Playwright Browsers:
```bash
npx playwright install
```

## Running Tests

The project includes pre-configured scripts in package.json to handle different environments:

Command	Description
npm run e2e	Runs tests using the default configuration.
npm run e2e:dev	Runs tests specifically in the Dev environment.
npm run e2e:qa	Runs tests specifically in the QA environment.
npm run e2e:stg	Runs tests specifically in the Staging environment.
npm run pw:open	Opens the Playwright UI mode for interactive debugging.

## Screenshots

The framework is configured to take a full-page screenshot after each test execution (e.g., checkout.png) to assist in visual verification and debugging.
 - Automated Authentication: Uses auth.setup.ts and custom fixtures to reuse login states.
 - Dynamic Cart Verification: Validates that products added on the Home page correctly match the items displayed in the Checkout/Cart page.
 - Tagging: Supports test filtering using tags like @AddCart.

