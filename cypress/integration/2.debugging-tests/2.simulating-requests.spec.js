/// <reference types="cypress" />

// PAGE OBJECTS
const simulatingRequestsPage = {
  get ammountInput() { return cy.get('[name="amount"]') },
  get phoneInput() { return cy.get('[name="phone"]') },
  get sendButton() { return cy.get('[type="submit"]') },
};

const loginPage = {
  get emailInput() { return cy.get('[name="email"]') },
  get passwordInput() { return cy.get('[name="password"]') },
  get loginButton() { return cy.get('[type="submit"]') },
};

// ============================ TESTS ============================
// 🐼 Focus on the domain requirements which affected the tests

describe("Simulating requests", () => {
  beforeEach(() => {
    cy.visit(
      "https://cypress-training-page-wpaczula.vercel.app/2/simulating-requests"
    );
    loginPage.emailInput.type("test@user.com"); // <---- CHANGE YOUR USER HERE
    loginPage.passwordInput.type("Password123"); // <---- CHANGE YOUR PASSWORD HERE
    loginPage.loginButton.click();
  });

  it("should show information if blik failed due to not found phone number", () => {
    cy.intercept("POST", "/api/blik", {
      fixture: "simulating-errors/not-found.json",
      statusCode: 404,
    }).as("notFound");
    const phone = "123-123-123";

    simulatingRequestsPage.ammountInput.type(5000);
    simulatingRequestsPage.phoneInput.type(phone);
    simulatingRequestsPage.sendButton.click();
    cy.wait("@notFound");

    cy.contains(
      `We couldn't find the recipient with given phone number: ${phone}`
    ).should("be.visible");
  });

  it("should show information if blik failed due to lack of funds", () => {
    cy.intercept("POST", "/api/blik", {
      fixture: "simulating-errors/lack-of-funds.json",
      statusCode: 403,
    }).as("lackOfFunds");
    const amount = 5000;

    simulatingRequestsPage.ammountInput.type(amount);
    simulatingRequestsPage.phoneInput.type("123-123-123");
    simulatingRequestsPage.sendButton.click();
    cy.wait("@lackOfFunds");

    cy.contains(
      `We couldn't send USD${amount} because of lack of funds`
    ).should("be.visible");
  });

  it("should show information if blik succeeded", () => {
    cy.intercept("POST", "/api/blik").as("request");
    const amount = 5000;
    const phone = "000-000-000";

    simulatingRequestsPage.ammountInput.type(amount);
    simulatingRequestsPage.phoneInput.type(phone);
    simulatingRequestsPage.sendButton.click();
    cy.wait("@request");

    cy.contains(
      `Amount USD${amount} was transfered to ${phone}`
    ).should("be.visible");
  });
});
