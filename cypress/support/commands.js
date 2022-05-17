
/*
* check all labels should be correct and intact
*/

Cypress.Commands.add('verifyTextLabels', (textData = []) => {
    textData.forEach(function (data) {
        cy.get(data[0]).invoke('text').then((text) => {
            expect(text.trim()).equal(data[1])
        });
    })
    
})

/*
* Login to a page
*/

Cypress.Commands.add('loginPage', (username, password) => {
    cy.get('#username').type(username); //CSS selector: 
    // cy.get("input[id='password']").type('T3st2022@#$');
    cy.get('#password').type(password); //CSS selector: 
    cy.get("span[class='element']").eq(0).click(); //click to uncheck the checkbox for remember me
    cy.get("span[class='element']").eq(1).click(); // chck to check the checkbox for agree to storage...
    cy.get("button[name='login']").click()
    
})
