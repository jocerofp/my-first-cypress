// ==================== PAGE OBJECT =======================

// 🐼 Jak uniknąć duplikacji? Pattern page object pewnie obił ci się o uszy
// To jak go zaimplementować w cypressie? Twórcy nie polecają podejścia selenium
// https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/
// Uwazają, ze mają następujące problemy:
// 1. Trudne do utrzymania
// 2. Dodatkowy stan w testach (przez przetrzymywanie instancji obiektu)
// 3. Dopasowanie page objectu pod test case prowadzi do "ifologii" w metodach

// Zamiast tego polecają reuzywanie selektorów i pozostawienie akcji w testach
// Pokazę wam dwa patterny które sprawdziły się u mnie

// 1. Trzymanie selektorów w innym pliku
// selectors.js
const emailInput = 'input[name="email"]'

// integration/test.spec.js
cy.get(emailInput).type('email@gmail.com')

// 2. Tworzenie obiektów zwracających cypressowe elementy ⭐️
const loginPage = {
    get emailInput() { return cy.get('email-selector') }
}

// ==> examples/page-object.spec.js

// dodatkowym fajnym podejściem z waszego projektu jest trzymanie property URL
const loginPage = {
    URL: '/login',

    get emailinput() { return cy.get('email-selector')}
}