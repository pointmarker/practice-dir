const express = require('express')
const app = express()

const router = require('./routes/index.route')
const { errorHandler, fourOfourHandler } = require('./middleware/errorHandler')
const { infoStream, errorStream } = require('./middleware/logger')



app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/",router)
app.use(fourOfourHandler)
app.use(errorHandler)

// what to do when try to close server
process.on('SIGINT',async() => {
    console.log('server closing')

    infoStream.end()
    errorStream.end()

    process.exit(0)
})

module.exports = app