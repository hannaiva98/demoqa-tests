class TextBoxPage {
  visit() {
    cy.visit("https://demoqa.com/text-box");
  }

  enterText(text) {
    cy.get("#userName").clear().type(text).should("have.value", text);
  }

  fillForm() {
    const fullName = faker.person.fullName();
    const email = faker.internet.email();
    const currentAddress = faker.location.streetAddress();
    const permanentAddress = faker.location.streetAddress();

    cy.get("#userName").type(fullName);
    cy.get("#userEmail").type(email);
    cy.get("#currentAddress").type(currentAddress);
    cy.get("#permanentAddress").type(permanentAddress);

    return { fullName, email, currentAddress, permanentAddress };
  }

  submitForm() {
    cy.get("#submit").scrollIntoView().click({ force: true });
  }

  verifyResult(data) {
    cy.get("#output").should("exist").and("be.visible");
    cy.get("#name").should("contain.text", text);
    cy.get("#email").should("contain.text", data.email);
    cy.get("#currentAddress").should("contain.text", data.currentAddress);
    cy.get("#permanentAddress").should("contain.text", data.permanentAddress);
  }
}

module.exports = TextBoxPage;
