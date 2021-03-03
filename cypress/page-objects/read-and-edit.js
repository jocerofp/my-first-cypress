export const page = {
    emojis: () => cy.get('').children().next().eq(1)
}
export default page;