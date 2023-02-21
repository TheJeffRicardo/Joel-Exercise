require('dotenv').config()
const {createPool} = require('mysql')

//Create connection variable
let connection = createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    port: process.env.dbPort,
    database: process.env.dbDatabase,
    multipleStatement: true
})

module.exports = connection