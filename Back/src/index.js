const express = require('express')
const cors = require('cors')


const app = express()

app.use(cors())


// middles wares
app.use(express.json())
// routers


app.listen(process.env.PORT, () => {
    console.log(`Server is Running... on port: ${process.env.PORT}`)
})