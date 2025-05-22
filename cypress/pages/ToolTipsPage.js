class ToolTipsPage {
  visit() {
    cy.visit('https://demoqa.com/tool-tips');
  }

  hoverAndCheck(selector, expectedText) {
    cy.get(selector)
      .scrollIntoView()
      .should('be.visible')
      .trigger('mouseover')
      .wait(1000);

    cy.get('.tooltip-inner')
      .should('be.visible')
      .and('contain', expectedText);
  }

  hoverButton() {
    this.hoverAndCheck('#toolTipButton', 'You hovered over the Button');
  }

  hoverTextField() {
    this.hoverAndCheck('#toolTipTextField', 'You hovered over the text field');
  }

hoverLink() {
  cy.contains('a', 'Contrary')
    .scrollIntoView()
    .should('be.visible')
    .trigger('mouseover')
    .wait(1000);

  cy.get('.tooltip-inner')
    .should('be.visible')
    .and('contain', 'You hovered over the Contrary');
}
}

export default ToolTipsPage;
