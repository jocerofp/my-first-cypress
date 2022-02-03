import filePage from '../../page-objects/files';

describe("Files", () => {
  beforeEach(() => {
    cy.visit("/3/files");
    cy.login();
  });

  it("should download the cypress image", () => {
    // 🐼 Kliknij w link z pobraniem pliku
    filePage.downloadButton().click();

    // 🐼 pobierz folder z downloadem i sprawdź czy dany plik tam jest
    // Cypress.config("downloadsFolder") zwraca ścieżkę do folderu "downloads"
  });

  it("should read the fixture file", () => {
    // 🐼 Ten test tylko parsuje plik fixture i sprawdza czy wiersze są zdefiniowane
  });
});
