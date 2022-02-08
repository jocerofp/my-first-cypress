/// <reference types="cypress" />

export const page = {
    url: '/1/read-and-edit',

    get emojis() { return cy.get('').children().next().eq(1) } 
}
export default page;