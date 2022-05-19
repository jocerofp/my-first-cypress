/* Creator: Joseph ocero
 * @LastEditors: Joseph Ocero
 * @DateCreated: 2022-05-17 13:32:26
 * @LastEditTime: 2022-05-17 18:43:32
 * @Description: basic SQL queries
 **/
/// <reference types="cypress" />

const util = require('util');
require('util.promisify').shim();

// const fs = require('fs');
// const readFileAsync = util.promisify(fs.readFile);
// const { promisify } = require("es6-promisify");

const sql = require('mssql');
const sqlConfig = {
  user: 'MadeByJK',
  password: 'FPDev1234',
  server: 'tcp:teams-allocation-manager.database.windows.net',
  database: 'TeamsAllocationManagerDb',
  port: 1433,
  options: {
    encrypt: true, // for azure,
    multipleactiveresultsets: false,
    connectiontimeout:30000,
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
};

context('DB queries', () =>{
    describe('verify sql query',()=>{
        async () => {
            try {
                // let pool = await sql.connect(config)   
             // make sure that any items are correctly URL encoded in the connection string
             await sql.connect(sqlConfig);
             const result = await sql.query('select top 1 * from dbo.Employees');
             console.log(result)
            } catch (err) {
              console.log(err)
            }
           }
    //    async () => {
    //        const connection = await(util.promisify(pool.getconn))
    //    }
    })

})