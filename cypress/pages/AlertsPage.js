class AlertsPage {
  constructor() {
    this.simpleAlertButton = '#alertButton';
    this.timerAlertButton = '#timerAlertButton';
    this.confirmAlertButton = '#confirmButton';
    this.promptAlertButton = '#promtButton';
  }

  visit() {
    cy.visit('https://demoqa.com/alerts');
  }

  clickSimpleAlert() {
    return cy.get(this.simpleAlertButton).click();
  }

  clickTimerAlert() {
    return cy.get(this.timerAlertButton).click();
  }

  clickConfirmAlert() {
    return cy.get(this.confirmAlertButton).click();
  }

  clickPromptAlert() {
    return cy.get(this.promptAlertButton).click();
  }
}

export default AlertsPage;
