const Content = require('../models/Content')
const express = require('express')
const router = new express.Router()

router.post("/contents",async(req,res)=>{
    const content = {
        name:req.body.name,
        description:req.body.description,
        type:req.body.type,
        url: req.body.url,
        content_order: req.body.content_order,
        section_id: req.body.section_id
    }
    await Content.create(content);
    res.send("Created")
})

router.get("/contents/:id" , async(req,res)=>{
    const id = req.params.id
    const content = await Content.getContent(id)
    res.send(content[0])
})

router.get("/contents/sec/:sectionId" , async(req,res)=>{
    const sectionId = req.params.sectionId
    const contents = await Content.getSectionContents(sectionId);
    res.send(contents)
})

module.exports = router
