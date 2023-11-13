const Category=require('../models/Category')
const express= require('express')
const router=new express.Router()

router.post('/category',async (req,res)=>{
    const name = req.body.name
    if(!name){
        return res.status(400).send('name required')
    }
    const category = {
        name
    }
    await Category.create(category)
    res.send('Done')
})

router.get('/category',async(req,res)=>{
    const rows = await Category.getAll()
    res.send(rows)
})

router.get('/category/:id',async(req,res)=>{
    const id = req.params.id
    const category = await Category.get(id)
    res.send(category[0])
 
})
module.exports = router