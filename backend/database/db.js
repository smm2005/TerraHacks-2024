const mysql = require('mysql2');
const {default_user, default_password, default_database, default_host} = require("../secret-data");

require("dotenv").config();

const database = mysql.createConnection({
    user: process.env.MYSQLDB_USER || default_user,
    host: process.env.MYSQLDB_HOST || default_host,
    database: process.env.MYSQLDB_DATABASES || default_database, 
    password: process.env.MYSQLDB_ROOT_PASSWORD || default_password
})

module.exports = database;
