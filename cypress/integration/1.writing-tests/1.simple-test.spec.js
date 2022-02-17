/// <reference types="cypress" />

// 🐼 Useful methods:
// cy.get(CSS-SELECTOR) - select an element
// cy.get(CSS-SELECTOR, TEXT) - choose an element using text
// .type(TEXT) - type into an input
// .select(TEXT) - choose an option from a dropdown
// .click() - click something
// .should('be.visible') - check if something is visible

describe('Greeting form', () => {
    beforeEach(() => {
        /*
         * Go to your page and invoke log in command 
         */
    })
    /*
    Test case 1
        Visit /1/simple-test
        Choose a gender - man
        Type name - Jan
        Send the form with "Send" button
        Expected result: a toast with a message is shown: "Hi Jan! I'm happy you sent the form!"
    */
    it('should 1...', () => {
        
    })
    
    /*
    Test case 2
        Visit /1/simple-test
        Choose a gender - woman
        Leave name field empty
        Send the form with "Send" button
        Expected result: a toast with a message is shown: "Hi misterious stranger! I'm happy you sent the form!"
    */
   it('should 2...', () => {
       
   })
})
