const pool = require('../database/postgres')

const getById = async (courseId) => {
    const { rows } = await pool.query('SELECT * FROM sections WHERE course_id = $1', [courseId])
    return rows
}

module.exports = {
    getById
}