// Setup podzielony jest na parę części, ale jest dość prosty
// Będziemy używali cucumber preprocesora, który poradzi sobie z plikami
// .feature i odpali napisane przez nas testy

1. Instalujemy paczkę cypress-cucumber-preprocessor: `npm i -D cypress-cucumber-preprocessor`
2. Inicjujemy plugin, który pozwoli nam na ładowanie plików .feature
```
/// <reference types="Cypress" />

const cucumber = require("cypress-cucumber-preprocessor").default;

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};
```
3. Dodajemy odpowiednią konfigurację ścieżek dla naszych stepów w `package.json`
```
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "commonPath": "cypress/integration/4.bdd/common" <--potrzebne tylko jeżeli nasze testy nie są bezpośrednio w integration
}
```
4. Dodajemy plik .feature i tworzymy od razu folder obok niego o tej samej nazwie
```
|
--> login.feature
--> login/nasze_pliki_ze_stepami.js
```