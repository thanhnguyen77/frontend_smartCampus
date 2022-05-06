const {
    createPool
}= require('mysql');
const pool = createPool({
    port:process.env.DB_PORT,
    host: process.env.DB_HOST,
    user  : process.env.DB_USER,
    password : process.env.DB_PASS,
    database: process.env.MY_SQL,
    connectionLimit : 1000
});

module.exports = pool;