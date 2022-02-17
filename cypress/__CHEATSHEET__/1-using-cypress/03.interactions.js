// ============================ SIMULATING USERS ============================

// 🐼 Cypress has a lot of functions built in, which allows to interact with found elements.
// Most of them have very straightforward names. Below you can find some that are mostly used

cy.get('button').click();                       // click the element (it must be visible)
cy.get('input').focus();                        // focus an element
cy.get('input').type('Text');                   // type somehting into the input or press a key like {ENTER}
cy.get('input').clear();                        // clear the input
cy.get('[type="checkbox"]').check();            // check and uncheck a checkbox element (it must have "checkbox" type)
cy.get('[type="checkbox"]').uncheck();
cy.get('[type="select"]').select('Option 1');   // choose Option 1 from select component (it has to behave like "select" element)

// ============================ API INTERCEPTS ============================

// 🐼 Apart from regular operations cypress also allows to intercept API requests. This feature allows to
// check if the request was made, wait for the request and avoid hardcoding the time in wait or check
// how the application behaves when an error is thrown
// IMPORTANT - intercept has to be called at the top before some interactions are made 

cy.intercept("GET", "http://my-api.com/things").as("request");
cy.wait("@request");

// 🐼 To mock a response from the server we can specify fixture/body and status code like this:
cy.intercept("POST", "http://my-api.com/things", { fixture: "fixture.json", statusCode: 404 });

// ============================ GETTING PROPERTIES ============================

// 🐼 A method that is useful to get some properties from cypress objects is ITS. Cases where it may be useful
// are getting the length of the children, getting the text content and so on.

cy.get('ul').children().its('length') 
