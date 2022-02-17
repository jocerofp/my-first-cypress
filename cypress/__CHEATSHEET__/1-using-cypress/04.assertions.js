// 🐼 Cypress has mocha library built in which comes with a lot of assertions. Apart from that
// it automatically waits for the elements to appear for some time so no hardcoded waits are required
// It also checks if elements are visible for the user. There are two ways to run an assertion:

// ================================== SHOULD =========================================

// 🐼 SHOULD gets two parameters. First one is the predicate, so what should be checked. The second one
// is optional and it can be a value that needs to be compared/checked

cy.get('ul').children().its('length').should("equal", 5);       // check if the length of children is equal to 5 
cy.should("have.length", 5);                                    // another way of doint the same thing
cy.get('.message').should("be.visible");                        // check if the element with ".message" class is visible
cy.get('button').should("be.disabled");                         // check if the button is disabled
cy.get('p').should("have.text", "text");                        // check if the paragraph has text "text"

// ================================= EXPECT ==========================================

// 🐼 Cypress allows to check the assertions away from the "chain of commands". In this case we can use
// EXPECT, which have the same assertions but written in a slightly different way

expect(value).to.equal(5);
expect(array).to.have.length(5);
expect(element).to.be.visible();
expect(element).to.be.disabled();
expect(element).to.have.text("text");

// 🐼 an example of use would be check if the API response has a correct status
callApi().then(response => {
    expect(response.status).to.equal(200)
})


