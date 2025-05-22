import { Given, When, Then, After } from '@badeball/cypress-cucumber-preprocessor';
import FormPage from '../../pages/FormPage';

Given('I open the practice form page', () => {
  FormPage.visit();
});

When('I fill in the required fields', () => {
  FormPage.fillMandatoryFields();
});

When('I click the submit button', () => {
  FormPage.submitForm();
});

Then('I should see a confirmation popup with correct data', () => {
  FormPage.checkResult();
});

After(() => {
  cy.screenshot();
});