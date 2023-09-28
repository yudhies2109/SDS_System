const {Pool} = require('pg');

const pool = new Pool ({
    host: "localhost",
    user: "yudhistira",
    port: 5432,
    password: "Mydatabase2102",
    database: "crud"
})

module.exports = pool;