class FormPage {
  constructor() {
    this.firstNameInput = '#firstName';
    this.lastNameInput = '#lastName';
    this.genderRadio = '[for="gender-radio-2"]';
    this.userNumberInput = '#userNumber';
    this.submitButton = '#submit';
    this.modalContent = '.modal-content';
  }

  visit() {
    cy.visit('https://demoqa.com/automation-practice-form');
  }

  fillMandatoryFields() {
    cy.get(this.firstNameInput).type('Hanna');
    cy.get(this.lastNameInput).type('Ivanova');
    cy.get(this.genderRadio).click();
    cy.get(this.userNumberInput).type('123456789');
  }

  submitForm() {
    cy.get(this.submitButton).click({ force: true });
  }

  checkResult() {
    cy.get(this.modalContent).should('be.visible');
    cy.contains('Hanna').should('exist');
    cy.contains('Ivanova').should('exist');
    cy.contains('123456789').should('exist');
  }
}

export default new FormPage();
