// Setup is quite simple and has few steps
// We will use cucumber preprocesor which will handle feature files

1. Install cypress-cucumber-preprocessor: `npm i -D cypress-cucumber-preprocessor`
2. Add the plugin
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
3. Add path configuration in `package.json`
```
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "commonPath": "cypress/integration/4.bdd/common" <-- required only if or tests are not directly in integration folder
}
```
4. Add .feature file and create steps in the folder next to it with the same name
```
|
--> login.feature
--> login/steps.js
```