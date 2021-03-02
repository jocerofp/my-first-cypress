// 🐼 Cypress zawiera wbudowaną ogromną liczbę asercji. Poza tym automatycznie wywołuje swoje wbudowane
// checki podczas wywoływania metod. Dla przykładu metoda click() sprawdzi, czy element jest wyrenderowany
// i nic go na pewno nie przesłania. Asercje można wywołać na dwa sposoby:

// ================================== METODA SHOULD =========================================

// 🐼 Metoda should przyjmuje dwa parametry - predykat i opcjonalnie wartość. Poniżej znajduje się parę opcji,
// więcej podpowie ci vs code po załadowaniu typów

cy.get('ul').children().its('length').should("equal", 5);       // sprawdź czy liczba dzieci (tagów li) jest równa 5
cy.should("have.length", 5);                                    // inny sposób na sprawdzenie długości
cy.get('.message').should("be.visible");                        // sprawdź czy element z klasą message jest widoczny
cy.get('button').should("be.disabled");                         // sprawdź czy button jest nieaktywny
cy.get('p').should("have.text", "text");                        // sprawdź czy paragraf ma tekst "text"

// ================================= METODA EXPECT ==========================================

// 🐼 Cypress pozwala też na sprawdzanie wartości poza "łańcuchem wywołań". W tym przypadku można użyć metody expect,
// która pozwala na dokładnie te same asercje.

expect(value).to.equal(5);
expect(array).to.have.length(5);
expect(element).to.be.visible();
expect(element).to.be.disabled();
expect(element).to.have.text("text");

// Poniżej znajduje się możliwy przypadek - pobieranie liczby elementów, strzał do API i porównanie
// czy liczba elementów w bazie zgadza się z tą wyświetloną na UI.

cy.get('.element')
    .children()
    .its('length')
    .then(length => {
        requestAPIToGetLength()
        .then((lenghtFromApi) => {
            expect(length).to.equal(lenghtFromApi)
        })
})

