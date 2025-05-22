// cypress/support/e2e.js
import '@badeball/cypress-cucumber-preprocessor';
import "cypress-real-events/support";
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Script error')) {
    return false;
  }
});
