const http = require('http')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


// To see about express api, see the documentation below
// https://expressjs.com/en/4x/api.html
const app = express()
const port = 3000

app.use(cors())
app.use(morgan('dev'))

// express.json() is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json())

// express.urlencoded() is a built-in middleware function in Express
// Returns middleware that only parses urlencoded bodies
app.use(express.urlencoded({extended : true}))

const server = http.createServer(app)
server.on('listening', () => {
    console.log('Listening on port', port)
})