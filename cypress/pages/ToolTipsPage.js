class ToolTipsPage {
  constructor() {
    this.button = '#toolTipButton';
    this.textField = '#toolTipTextField';
    this.link = 'a:contains("Contrary")';
  }

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
    this.hoverAndCheck(this.button, 'You hovered over the Button');
  }

  hoverTextField() {
    this.hoverAndCheck(this.textField, 'You hovered over the text field');
  }

  hoverLink() {
    cy.get(this.link)
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
