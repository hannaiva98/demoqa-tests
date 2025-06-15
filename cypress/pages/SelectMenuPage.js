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

  verifySelectedValue(field, expectedValue) {
    if (field === 'selectValue') {
      cy.get('#withOptGroup .css-1uccc91-singleValue').should('contain.text', expectedValue);
    } else if (field === 'selectOne') {
      cy.get('#selectOne .css-1uccc91-singleValue').should('contain.text', expectedValue);
    } else if (field === 'oldStyle') {
      cy.get('#oldSelectMenu').should('contain.text', expectedValue);
    }
  }

  verifySelectedValues({ multiSelect }) {
    if (multiSelect && multiSelect.length > 0) {
      multiSelect.forEach(value => {
        cy.get('#cars .css-multi-value__label').should('contain.text', value);
      });
    }
  }

  verifySelectedValuesInMultiSelect(expectedOptions) {
    cy.get('#cars')
      .invoke('val')
      .should('deep.equal', expectedOptions);
  }
}

module.exports = new SelectMenuPage();
