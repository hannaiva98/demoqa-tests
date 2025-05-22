class AlertsPage {
  visit() {
    return cy.visit("https://demoqa.com/alerts");
  }

  clickSimpleAlert() {
    return cy.get('#alertButton').click().then(() => {
      console.log('Clicked alert button');
    });
  }

  clickTimerAlert() {
    return cy.get('#timerAlertButton').click().wait(6000);
  }

  clickConfirmAlert() {
    return cy.get('#confirmButton').click();
  }

  clickPromptAlert() {
    return cy.get('#promtButton').click();
  }
}

export default AlertsPage;
