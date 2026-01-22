# seamlessHR-saucedemo

A small Cypress + Cucumber (Gherkin) test suite that exercises the Sauce Labs demo site (`https://www.saucedemo.com`).

This repository demonstrates end-to-end tests written as `.feature` files (Gherkin) with step definitions implemented in TypeScript using the `@badeball/cypress-cucumber-preprocessor` and `esbuild` preprocessor.

**Status**: Example test suite for learning and demonstration purposes.

**Contents**
- **Features**: `cypress/e2e/*.feature` (Gherkin scenarios).
- **Step definitions**: `cypress/support/step_definitions/*.ts` (TypeScript steps).
- **Cypress config**: `cypress.config.ts` (baseUrl, spec pattern, preprocessor plugin).

**Prerequisites**
- Node.js (LTS recommended) and `npm` (or `pnpm`/`yarn`).

Getting started
1. Install dependencies:

```bash
npm install
```

2. Open Cypress interactive runner:

```bash
npm run cy:open
```

3. Run the test suite in headless mode:

```bash
npm run cy:run
```

Useful npm scripts
- `npm run cy:open` — Open Cypress test runner (interactive).
- `npm run cy:run` — Run all feature specs headlessly.
- `npm run test:regression` — Run specs tagged `@regression`.
- `npm run test:positive` — Run specs tagged `@positive`.
- `npm run test:no-negative` — Run specs excluding `@negative`.
- `npm run test:cart-checkout` — Run specs tagged `@cart` or `@checkout`.

Configuration notes
- `cypress.config.ts` sets `baseUrl` to `https://www.saucedemo.com` and `specPattern` to `**/*.feature` so the suite runs feature files directly.
- The cucumber preprocessor is configured to use `esbuild` and the TypeScript step definitions in `cypress/support/step_definitions/*.ts`.

Writing tests
- Add Gherkin feature files to `cypress/e2e/`.
- Add corresponding step definitions in `cypress/support/step_definitions/` using the `@badeball/cypress-cucumber-preprocessor` `Given/When/Then` imports.
- Use tags in feature files (for example `@regression`, `@smoke`, `@checkout`) and pass `--env tags=@tag` to `cypress run` or use the supplied npm scripts.

Project structure (short)

```
.
├─ cypress/
│  ├─ e2e/                      # `.feature` files
│  └─ support/
│     ├─ e2e.ts                 # Cypress support entry (currently empty)
│     └─ step_definitions/      # TypeScript step definitions
├─ cypress.config.ts            # Cypress + cucumber config
├─ package.json                 # scripts & dependencies
└─ tsconfig.json                # TypeScript configuration
```

Notes & tips
- If you see TypeScript or plugin errors, ensure your Node.js version is compatible with the installed `cypress` and `esbuild` versions.
- The repository uses the `@badeball/cypress-cucumber-preprocessor` plugin — check its docs for advanced configuration and report generation.

Contributing
- Create feature files and matching step definitions, open a PR, and include a short description of new scenarios and needed selectors.

License
- See the `LICENSE` file at the repo root.

Questions or issues
- File issues at: https://github.com/Blesnick/seamlessHR-saucedemo/issues
