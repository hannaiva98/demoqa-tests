# DemoQA Cypress Tests

## Description  
This project contains automated tests for the [demoqa.com](https://demoqa.com) website.  
Tests are written using **Cypress** with **Cucumber (BDD)** syntax via Gherkin feature files.  
The project follows the **Page Object Model (POM)** pattern and includes support for:

- Parallel test execution (via CI & Cypress Dashboard)
- Tag-based test selection (running tests by specific tags)
- Dynamic test data generation
- Multiple locator strategies (CSS, XPath)
- Reusable base steps (e.g., `I open {string} page`, `I click the {string} button`)

---

## Installation  
To install all necessary packages, run:

```bash
npm install
