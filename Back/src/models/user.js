const pool = require('../database/postgres.js')

const getAllUsers = async () => {
    return (await pool.query('SELECT * FROM users')).rows
}


module.exports = {
    getAllUsers
}