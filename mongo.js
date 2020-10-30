import mongoose from 'mongoose'
require('dotenv').config('./env')

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_URL}/${process.env.MONGO_NAME}`

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

// We can add event handler for mongoose.connection
// using mongoose.connection.on(eventName, callback)
mongoose.connection.on('connected', () => {
    console.log('Mongo has connected successfully')
})

mongoose.connection.on('reconnected', () => {
    console.log('Mongo has reconnected')
})

mongoose.connection.on('error', (error) => {
    console.log("Error Occured in Mongo Connection", error)
    mongoose.disconnect()
})

mongoose.connection.on("disconnect", () => {
    console.log("Mongo Connection is disconnected")
})