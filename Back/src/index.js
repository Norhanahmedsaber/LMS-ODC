const express = require('express')
const cors = require('cors')

const courseRouter = require("../routers/course")
const userRouter = require('./routers/user')
const categoryRouter=require('./routers/category')


const app = express()

app.use(cors())


// middles wares
app.use(express.json())
// routers


app.use(courseRouter)
app.use(userRouter)

app.use(categoryRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server is Running... on port: ${process.env.PORT}`)
})