// plugins/index.js
// 🐼 Install cypress-dotenv - npm i cypress-dotenv -D / yarn add cypress-dotenv -D
// Then paste the code into plugin file:

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

// 🐼 Create .env files. Depending on the environment CYPRESS_ENV a proper file will be used. For instance if we run
// npx cypress run --environment dev .env.dev will be used
// Each variable needs to start with CYPRESS_ for example:

/**
 CYPRESS_USER_EMAIL=admin@gmail.com
 CYPRESS_USER_PASSWORD=Password123
 CYPRESS_BASE_URL=http://localhost:3005
 CYPRESS_API_ROUTE=/api
 CYPRESS_API_URL=https://dev.com
 */

 // To get a variable we can use Cypress.env()
 Cypress.env('USER_EMAIL')
 Cypress.env('USER_PASSWORD')
 Cypress.env('BASE_URL')
 Cypress.env('API_ROUTE')
 Cypress.env('API_URL')
 

