// plugins/index.js
// Najpierw zainstaluj paczkę cypress-dotenv - npm i cypress-dotenv -D / yarn add cypress-dotenv -D
// Później wklej kodzik do pliku z pluginami:

const dotenvPlugin = require('cypress-dotenv')
const path = require('path')
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (_on, config) => {
  const envPath = path.resolve(
    __dirname,
    `../.env${config.env.CYPRESS_ENV ? '.' + config.env.CYPRESS_ENV : ''}`,
  )
  config = dotenvPlugin(config, { path: envPath }, true)

  return config
}

// Ostatnim krokiem jest stworzenie plików .env. W zależności od podanej zmiennej środowiskowej
// Zostanie wybrany odpowiedni plik. Dla przykładu, jeżeli odpalimy cypressa w ten sposób: npx cypress run --environment dev
// Wykorzystany zostanie plik .env.dev
// Wszystkie zmienne środowiskowe muszą się zaczynąć od CYPRESS_ np:

/**
 CYPRESS_USER_EMAIL=admin@gmail.com
 CYPRESS_USER_PASSWORD=Password123
 CYPRESS_BASE_URL=http://localhost:3005
 CYPRESS_API_ROUTE=/api
 CYPRESS_API_URL=https://dev.com
 */

 // Aby je pobrać należy użyć metody Cypress.env() np
 Cypress.env('USER_EMAIL')
 Cypress.env('USER_PASSWORD')
 Cypress.env('BASE_URL')
 Cypress.env('API_ROUTE')
 Cypress.env('API_URL')
 

