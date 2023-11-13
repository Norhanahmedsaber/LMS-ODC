const pool = require('../database/postgres.js')

const getAll = async () => {
    return (await pool.query('SELECT * FROM users')).rows
}

const getByID = async (id) => {
    const results = await pool.query('SELECT first_name FROM users WHERE id=$1', [id])
    return results.rows
}

const getStudents = async () => {
    const results = await pool.query("SELECT * FROM users WHERE role= 'student'")
    return results.rows
}
const getInstractors = async () => {
    const results = await pool.query("SELECT * FROM users WHERE role= 'instractor'")
    return results.rows
}
module.exports = {
    getAll,
    getByID,
    getStudents,
    getInstractors
}