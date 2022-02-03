/// <reference types="cypress" />

// 🐼 Uzyteczne metody:
// cy.attachFile(FIXTURE_FILE, options) - upload pliku
// cy.wrap(variable) - wrzuć zwykłą zmienną do cypressa aby wywoływać na niej jego metody
// .children() - pobierz dzieci
// .eq(index) - pobierz wartość o danym indexie
// .should('have.text', text) 

import filePage from "../../page-object/file";
// 🐼 Dodaj bibliotekę cypress-file-upload i dodaj jej komendę w pliku commands według instrukcji na npm
// 🐼 Dodaj bibliotekę papaparse aby ułatwić parsowanie i zaimportuj ją

describe("Files", () => {
  beforeEach(() => {
    /*
    * Tutaj możesz umieścić wejście na stronę + logowanie
    */
  });

   /**
     Wejdź na stronę /3/files
     Wrzuć plik "users.csv" (folder fixtures) poprzez drag-n-drop
     Kliknij przycisk "Podgląd"
     Spodziewany rezultat: użytkownicy z pliku CSV pokazują się pod przyciskiem w tabelce
     sparsuj plik z folderu fixtures i sprawdź czy każdy wiersz posiada dobre dane
     */
    it('should 1', () => {
        
    })
});
