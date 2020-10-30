import http from 'http'
import express from 'express'
import cors from 'cors'

// To see about express api, see the documentation below
// https://expressjs.com/en/4x/api.html
const app = express()
const port = 3000

/** Set port for express */
app.set("port", port)

/** Add Middleware for express */
app.use(cors())

// express.json() is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json())

// express.urlencoded() is a built-in middleware function in Express
// Returns middleware that only parses urlencoded bodies
app.use(express.urlencoded({extended : true}))

// Make a error handling for 404
app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: "Invalid API Endpoint"
    })
})


/** Create HTTP Server */
const server = http.createServer(app)

server.on('listening', () => {
    console.log('Listening on port', port)
})

