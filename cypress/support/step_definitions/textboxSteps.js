import { Given, When, Then, After } from "@badeball/cypress-cucumber-preprocessor";
import TextBoxPage from "../../pages/TextBoxPage";

const page = new TextBoxPage();

Given("I visit the textbox page", () => {
  page.visit();
});

When("I enter {string} into the textbox", (text) => {
  page.enterText(text);
  cy.wrap(text).as("submittedText");
});

When("I submit the form", () => {
  page.submitForm();
});

Then("I should see the submitted text", () => {
  cy.get("@submittedText").then(text => {
    cy.get("#output").should("be.visible");
    cy.get("#output").should("contain.text", `Name: ${text}`); 
  });
});

After(() => {
  cy.screenshot();
});
