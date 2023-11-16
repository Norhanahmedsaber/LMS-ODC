const pool = require('../database/postgres')

const create = async(content)=>{
    await pool.query('INSERT INTO "contents" (name,description,type, url, content_order, section_id) VALUES ($1 , $2 , $3, $4, $5, $6)',
    [content.name , content.description , content.type, content.url, content.content_order, content.section_id]);
}

const getContent = async(id)=>{
    const {rows} =await pool.query('SELECT * From "contents" where id =$1' ,[id]);
    return rows
}

const getSectionContents = async(SectionId)=>{
    const {rows} =await pool.query('SELECT * From "contents" where section_id=$1',[SectionId] )
    return rows
}

module.exports = {
    create,
    getContent,
    getSectionContents
}