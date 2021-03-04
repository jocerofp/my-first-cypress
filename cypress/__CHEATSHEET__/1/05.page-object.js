// ==================== PAGE OBJECT =======================

// 🐼 Jak uniknąć duplikacji? Pattern page object pewnie obił ci się o uszy
// To jak go zaimplementować w JSie? Są na to przynajmniej dwa sposoby,
// wybierz ten, k†óry lepiej się dla ciebie sprawdza 

// 1.
const loginPage = {
    emailInput: () => cy.get('email-selector')
}

// 2.
const loginPage = {
    fillEmail: (email) => cy.get('email-selector').type(email)
}


// 🐼 Nie zapomnij o eksportowaniu page objectu z pliku
export default loginPage