// ==================== LIBKI =======================

// Czasami cypress nie ma natywnie wsparcia dla niektórych ficzerów i użyteczne okazują się libki
// Jedną z częściej spotykanych funkcjonalności, do których można użyć bibliotek są działania nia plikach
// Polecam gorąco cypress-file-upload do uploadowania plików zarówno przez drag and drop jak i klasycznie
// przez kliknięcie w przycisk.

// https://www.npmjs.com/package/cypress-file-upload


// Zdarza się tez, że trzeba sparsować jakiś plik CSV. Nie ma co robić tego ręcznie
// Polecam bibliotekę o śmiesznej nazwie papaparse. Pozwala w bardzo prosty sposób sparsować plik który jest
// pobrany jako string używając nagłówków jako nazwy propertasów obiektu. Samo pobieranie pliku z dysku jest
// dostępne w cypressie od ręki przez funkcję readFile
import Papa from "papaparse";

cy.readFile('path/to/file/from/the/root/of/the/project').then(file => {
    // do whatever with the file
    const parsedFile = Papa.parse(file, { header: true });
    const {data} = parsedFile;
})

// Podczas parsowania używamy funkcji "then" przez co "wychodzimy" z chaina cypressa, żeby do niego wrócić, możemy
// użyć funkcji wrap. Pozwoli nam to na używanie innych metod takich jak its, should czy jak w przypadku tablic each
// Da to nam jedną znaczącą zaletę - wszystkie takie działania będziemy widzieli w pasku z boku podczas uruchamiania
// cypressa i będziemy mogli w nie kliknąć, żeby "wypluć" wynik na konsolę. Warto jednak "wrapować" raz
// i zapisać sobie wynik w aliasie zamiast wrappować co linijka tej samej wartości. Dzięki temu panel jest czytelniejszy
//  Ponizej znajduje się przykład jak przejść przez sparsowany plik.

const users = [];
cy.wrap(users).each(user => {
    cy.wrap(user).as('user');

    cy.get('@user').its('id').should('not.be.undefined');
})

// Innym sposobem, który też działa jest użycie "expect" i czystego JSa. Nie widzimy jednak wtedy tego co się dzieje na konsoli
// Preferowany sposób zależy wg mnie od ustalenia w zespole lub od sytuacji

const users = [];
users.forEach(user => {
    expect(user.id).not.to.be.undefined()
})