const express = require('express')
const aircraftRoute = require('./routes/aircraftRoute')
const airlineRoute = require('./routes/airlineRoute')
const airportRoute = require('./routes/airportRoute')
const helicopterRoute = require('./routes/helicopterRoute')
const errorHandler = require('./middleware/errorHandlerMiddleware')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

// Middleware 
app.use(cors())
app.use(express.json());
app.use(errorHandler)

// Routes
app.use('/api/aircraft', aircraftRoute)
app.use('/api/airline', airlineRoute)
app.use('/api/airport', airportRoute)
app.use('/api/helicopter', helicopterRoute)

// Connecting to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})