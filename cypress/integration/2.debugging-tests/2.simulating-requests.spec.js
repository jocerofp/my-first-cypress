const simulatingRequestsSelectors = {
  ammountInput: () => cy.get('[name="amount"]'),
  phoneInput: () => cy.get('[name="phone"]'),
  sendButton: () => cy.get('[type="submit"]'),
};

const loginSelectors = {
  emailInput: () => cy.get('[name="email"]'),
  passwordInput: () => cy.get('[name="password"]'),
  loginButton: () => cy.get('[type="submit"]'),
};

describe("Simulating requests", () => {
  beforeEach(() => {
    cy.visit(
      "https://cypress-training-page-wpaczula.vercel.app/2/simulating-requests"
    );
    loginSelectors.emailInput().type("test@user.com");
    loginSelectors.passwordInput().type("Password123");
    loginSelectors.loginButton().click();
  });

  it("should show information if blik succeeded", () => {
    cy.intercept("POST", "/api/blik").as("lackOfFunds");
    const amount = 50;
    const phone = "123-123-123";

    simulatingRequestsSelectors.ammountInput().type(amount);
    simulatingRequestsSelectors.phoneInput().type(phone);
    simulatingRequestsSelectors.sendButton().click();
    cy.wait("@lackOfFunds");

    cy.contains(
      `Kwota ${amount}PLN została poprawnie przelana na numer ${phone}`
    ).should("be.visible");
  });

  it("should show information if blik failed due to not found phone number", () => {
    cy.intercept("POST", "/api/blik", {
      fixture: "simulating-errors/not-found.json",
      statusCode: 404,
    }).as("notFound");
    const phone = "123-123-123";

    simulatingRequestsSelectors.ammountInput().type(50);
    simulatingRequestsSelectors.phoneInput().type(phone);
    simulatingRequestsSelectors.sendButton().click();
    cy.wait("@notFound");

    cy.contains(
      `Nie udało się znaleźć odbiorcy o numerze telefonu ${phone}`
    ).should("be.visible");
  });

  it("should show information if blik failed due to lack of funds", () => {
    cy.intercept("POST", "/api/blik", {
      fixture: "simulating-errors/lack-of-funds.json",
      statusCode: 403,
    }).as("lackOfFunds");
    const amount = 50;

    simulatingRequestsSelectors.ammountInput().type(amount);
    simulatingRequestsSelectors.phoneInput().type("123-123-123");
    simulatingRequestsSelectors.sendButton().click();
    cy.wait("@lackOfFunds");

    cy.contains(
      `Nie udało się przesłać ${amount}PLN z uwagi na brak środków na koncie`
    ).should("be.visible");
  });
});
