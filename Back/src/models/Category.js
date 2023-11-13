const pool=require('../database/postgres')
const create=async(category)=>{
    await pool.query('INSERT INTO "categories" (name) VALUES ($1)',[category.name])
}
const get=async(id)=>{
    const { rows } = await pool.query('SELECT * FROM "categories" where id = $1',[id])
    return rows
}
const getAll=async()=>{
    const results = await pool.query('SELECT * FROM "categories"')
    return results.rows;
}
module.exports={
    create,get,getAll
}