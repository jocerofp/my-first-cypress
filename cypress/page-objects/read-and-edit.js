/// <reference types="cypress" />

export const page = {
    emojis() { return cy.get('').children().next().eq(1) } 
}
export default page;