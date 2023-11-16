const Section = require('../models/section')
const express = require('express')
const router = new express.Router()

// Get Sections
router.get('/sections/:courseId', async (req, res) => {
    const courseId = req.params.courseId
    if(!courseId) {
        return res.status(400)
    }
    const sections = await Section.getById(courseId)
    res.send(sections)
})

// Create Section
router.post('/sections/:courseId', async (req, res) => {

})
module.exports=router