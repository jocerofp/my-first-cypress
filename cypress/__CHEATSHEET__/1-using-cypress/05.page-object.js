// ==================== PAGE OBJECT =======================

// 🐼 How to avoid duplication? You heard about page object pattern?
// let's see how to implement it in cypress
// first of all let's see app actions suggested by the creators of cypress 
// https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/
// POs have these issues according to the blog:
// 1. They are hard to maintain
// 2. They have an additional state in the object
// 3. Ifs in the methods are added to match the page object to the visible page

// Instead of the classic pattern we can use selectors and leave the actions in the tests

// 1. Keeping selectors in a separate file
// selectors.js
const emailInput = 'input[name="email"]'

// integration/test.spec.js
cy.get(emailInput).type('email@gmail.com')

// 2. Using page objects containing methods which return elements ⭐️
const loginPage = {
    get emailInput() { return cy.get('email-selector') }
}

// ==> examples/page-object.spec.js

// URL/visit methods can also be added here as they are usually bound to the page object
const loginPage = {
    URL: '/login',

    get emailinput() { return cy.get('email-selector')}
}