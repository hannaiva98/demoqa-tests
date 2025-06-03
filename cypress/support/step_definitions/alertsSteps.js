import { Given, When, Then, After } from "@badeball/cypress-cucumber-preprocessor";
import AlertsPage from "../../pages/AlertsPage";

const page = new AlertsPage();

Given("I open the alerts page", () => {
  page.visit();
});
//TODO remove locators to the constructor section in Page Object
When("I click on each alert button", () => {
  cy.on('window:alert', (text) => {
    cy.log(`Alert text: ${text}`);
    expect(text).to.be.a('string');
  });

  cy.on('window:confirm', (text) => {
    cy.log(`Confirm text: ${text}`);
    return true;
  });

  cy.on('window:prompt', (text) => {
    cy.log(`Prompt text: ${text}`);
    return 'Тестовое значение';
  });

  page.clickSimpleAlert()
    .then(() => page.clickTimerAlert())
    .then(() => page.clickConfirmAlert())
    .then(() => page.clickPromptAlert());
});



Then("I should see alert texts and accept them", () => {
});

After(() => {
  cy.screenshot();
});
