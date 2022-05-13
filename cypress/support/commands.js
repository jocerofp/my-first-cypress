// 🐼 Add your log in command

Cypress.Commands.add('YOUR_COMMAND_NAME', () => {
// 🐼 Fill the inputs and click log in
// the login mechanism will automatically redirect you
// back to the page you wanted to visit
})

// The name should be "login" - all methods start with a small letter in cypress
// thte body is a copy paste from the login part in your test /integration/login.spec.js

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