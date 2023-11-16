const express = require("express")
const Course = require("../models/courese")

const router = new express.Router()

router.post("/courses",async(req,res)=>{
    const course = {
        name:req.body.name,
        description:req.body.description,
        catgory_id:req.body.category_id
    }
    await Course.create(course);
    res.send("Created")
})

router.get("/courses" , async(req, res)=>{
    console.log("courses")
    const courses = await Course.getall()
    res.send(courses)
})

router.get("/course/:id" , async(req,res)=>{
    const id = req.params.id
    const course = await Course.getcourse(id)
    res.send(course[0])
})

router.get("/course/cat/:categoryId" , async(req,res)=>{
    const categoryId = req.params.categoryId
    const courses = await Course.getbycat(categoryId)
    res.send(courses)
})

module.exports = router
