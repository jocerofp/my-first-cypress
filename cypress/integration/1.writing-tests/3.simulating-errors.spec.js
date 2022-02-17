/// <reference types="cypress" />

// 🐼 Useful methods:
// cy.intercept(METHOD, URL, { fixture: FILE, statusCode: CODE }).as('request')
// cy.wait('@request')

describe('Make my blik payment', () => {
    beforeEach(() => {
        /*
         * Go to your page and invoke log in command 
         */
    })
    
    /*
    Test case 1
        Visit /1/simulating-requests
        Fill amount input
        Fill phone number input
        Send with "Send via BLIK" button
        Expected result: If the phone number exists and the transfer was made (status 200 in "/api/blik") 
            the user should see a message: "Amount USD*AMOUNT* was transfered to *PHONE_NUMBER*"
    */
    it('should 1...', () => {
        
    })
    
    /*
    Test case 2
        Visit /1/simulating-requests
        Fill amount input
        Fill phone number input
        Send with "Send via BLIK" button
        Expected result: If the phone number does not exist (status 404 and body { code: "number_not_found" } in "/api/blik") 
            the user should see a message: "We couldn't find the recipient with given phone number: *PHONE_NUMBER*".
    */
   it('should 2...', () => {
       
   })

    /* 
    Test case 3
       Visit /1/simulating-requests
        Fill amount input
        Fill phone number input
        Send with "Send via BLIK" button
        Expected result: If the bank account does not have enough funds (status 403 and body { code: "lack_of_funds" }) 
        the user should see a message: "We couldn't send USD*AMOUNT* because of lack of funds"
    */
   it('should 3...', () => {
       
   })
})
