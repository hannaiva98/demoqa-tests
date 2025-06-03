class FormPage {
  visit() {
    cy.visit('https://demoqa.com/automation-practice-form');
  }
//TODO remove locators to the constructor section in Page Object
  fillMandatoryFields() {
    cy.get('#firstName').type('Hanna');
    cy.get('#lastName').type('Ivanova');
    cy.get('[for="gender-radio-2"]').click();
    cy.get('#userNumber').type('123456789');
  }

  submitForm() {
    cy.get('#submit').click({ force: true });
  }

  checkResult() {
    cy.get('.modal-content').should('be.visible');
    cy.contains('Hanna').should('exist');
    cy.contains('Ivanova').should('exist');
    cy.contains('123456789').should('exist');
  }
}

export default new FormPage();
