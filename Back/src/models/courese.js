const pool = require("../database/postgres")

const create = async(course)=>{
    await pool.query('INSERT INTO "courses" (name,description,category_id) VALUES ($1 , $2 , $3)',[course.name , course.description , course.catgory_id])
}
const getcourse = async(id)=>{
    const {rows} =await pool.query('SELECT * From "courses" where id =$1' ,[id]);
    return rows
}

const getall = async()=>{
   const {rows}= await pool.query('SELECT * from courses')
    return rows
}

const getbycat = async(id)=>{
    const {rows} =await pool.query('SELECT * From "courses" where category_id=$1',[id] )
    return rows
}

module.exports ={
    create,
    getcourse,
    getall,
    getbycat
}