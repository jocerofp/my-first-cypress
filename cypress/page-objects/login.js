// 🐼 Popraw selektor inputa na email i kontynuuj pisanie selektorów
// z użyciem Page Objectów 

const loginPage = {
    emailInput: () => cy.get('input')
}

export default loginPage