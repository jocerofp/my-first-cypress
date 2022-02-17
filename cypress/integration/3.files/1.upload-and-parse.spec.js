/// <reference types="cypress" />

// 🐼 Useful methods:
// cy.attachFile(FIXTURE_FILE, options) - upload a file
// cy.wrap(variable) - wrap normal variable into the cypress chain to use cypress methods
// .children() - get children
// .eq(index) - get child at index
// .should('have.text', text) - assert the text

import filePage from "../../page-object/file";
// 🐼 Add cypress-file-upload library and add the command according to their npm page
// 🐼 Add papaparse library and import it

describe("Files", () => {
  beforeEach(() => {
    /*
    * Go to your page and invoke log in command 
    */
  });

   /**
    Visit /3/files
    Drag and drop "users.csv" file (fixtures directory)
    Click "Preview" button
    Expected result: users from the CSV file are visible under the table
    */
    it('should...', () => {
        
    })
});
