const express = require('express')
const Auth=require('../models/Auth')

const router = new express.Router()

router.post('/login', async (req, res) => { 
    user = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }
    const response = await Auth.login(user);
    res.send(response)
})

router.post('/signup', async (req, res) => { 
    user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        job: req.body.job,
        bio: req.bio.bio
    }
    await Auth.signUp(user);
})

module.exports = router