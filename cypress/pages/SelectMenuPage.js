class SelectMenuPage {
  open() {
    cy.visit('https://demoqa.com/select-menu');
  }

  selectValue(optionText) {
    cy.get('#withOptGroup').click();
    cy.get('div[id^="react-select"]')
      .should('be.visible')
      .contains(optionText)
      .click();
  }

  selectOne(optionText) {
    cy.get('#selectOne').click();
    cy.get('.css-26l3qy-menu')
      .should('be.visible')
      .contains(optionText)
      .click();
  }

  selectOldStyle(optionText) {
    cy.get('#oldSelectMenu').select(optionText);
  }

  selectMultipleOptions(options) {
    cy.get('#cars').select(options);
  }

  verifySelectedValues(expected) {
    cy.get('#withOptGroup')
      .parent()
      .find('.css-1uccc91-singleValue')
      .should('have.text', expected.selectValue);

    cy.get('#selectOne')
      .parent()
      .find('.css-1uccc91-singleValue')
      .should('have.text', expected.selectOne);

    cy.get('#oldSelectMenu')
      .find('option:selected')
      .should('have.text', expected.oldStyle);

    cy.get('#cars')
      .invoke('val')
      .should('deep.equal', expected.multiSelect);
  }
}

module.exports = new SelectMenuPage();
