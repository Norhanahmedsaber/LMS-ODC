const express = require('express')
const user = require('../services/user')
const router = new express.Router();

router.get("/users" , async (req, res) => {
    const users = await user.getAll()
    res.send(users)
})

module.exports = router