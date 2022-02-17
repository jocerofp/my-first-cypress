import filePage from '../../page-objects/files';

describe("Files", () => {
  beforeEach(() => {
    cy.visit(filePage.url);
    loginPage.emailInput.type("test@user.com");
    loginPage.passwordInput.type("Password123");
    loginPage.loginButton.click();
  });

  it("should download the cypress image", () => {
    // 🐼 Click on the link to get the file
    filePage.downloadButton().click();

    // 🐼 Get the download folder and check if the file is there
    // Cypress.config("downloadsFolder") returns the path "downloads"
  });

  it("should read the fixture file", () => {
    // 🐼 Test to only parse the file and check how it works
  });
});
