const editSaveSelectors = {
  emojis: () =>
    cy
      .contains(/Twoje \d+ emoji/)
      .next()
      .children(),
  newEmojis: () =>
    cy
      .contains(/Twoje \d+ emoji/)
      .next()
      .next()
      .invoke("text"),
  editButton: () => cy.contains('[type="button"]', "Edytuj"),
  emojiIncreaseArrow: () =>
    cy.get('[name="numberOfEmojis"]').next().children().eq(0),
  notRobotCheckbox: () => cy.get('[name="isNotARobot"]'),
  saveButton: () => cy.get('[type="submit"]'),
  cancelButton: () => cy.contains('[type="button"]', "Anuluj"),
};

const loginSelectors = {
  emailInput: () => cy.get('[name="email"]'),
  passwordInput: () => cy.get('[name="password"]'),
  loginButton: () => cy.get('[type="submit"]'),
};


describe("Edit save", () => {
  beforeEach(() => {
    cy.visit("https://cypress-training-page-wpaczula.vercel.app/2/edit-save");
      loginSelectors.emailInput().type("test@user.com");
      loginSelectors.passwordInput().type("Password123");
      loginSelectors.loginButton().click();
  });

  it("should increase number of emojis by 1 using arrow", () => {
    editSaveSelectors.emojis().its("length").as("initialLength");

    editSaveSelectors.editButton().click();
    editSaveSelectors.emojiIncreaseArrow().click();
    editSaveSelectors.notRobotCheckbox().check({ force: true });
    editSaveSelectors.saveButton().click();

    cy.get("@initialLength").then((initialLength) => {
      editSaveSelectors
        .emojis()
        .its("length")
        .should("equal", initialLength + 1);
    });
  });

  it("should not change the number of emojis if cancel button is pressed", () => {
    editSaveSelectors.emojis().its("length").as("initialLength");
    editSaveSelectors.emojis().invoke("text").as("initialEmojis");

    editSaveSelectors.editButton().click();
    editSaveSelectors.emojiIncreaseArrow().click();
    editSaveSelectors.cancelButton().click();

    cy.get("@initialLength").then((initialLength) => {
      editSaveSelectors.emojis().its("length").should("equal", initialLength);
    });
    cy.get("@initialEmojis").then((initialEmojis) => {
      editSaveSelectors
        .emojis()
        .invoke("text")
        .should("not.equal", initialEmojis);
    });
  });
});
