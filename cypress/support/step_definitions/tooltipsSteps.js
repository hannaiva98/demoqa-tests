import { Given, When, Then, After } from '@badeball/cypress-cucumber-preprocessor';
import ToolTipsPage from '../../pages/ToolTipsPage';

const page = new ToolTipsPage();
//TODO remove locators to the constructor section in Page Object
Given('I open the tool tips page', () => {
  page.visit();
});

When('I hover over each tooltip element', () => {
  page.hoverButton();
  page.hoverTextField();
  page.hoverLink();
});

Then('tooltips should appear', () => {
  cy.get('.tooltip-inner').should('be.visible');
});

After(() => {
  cy.screenshot();
});
