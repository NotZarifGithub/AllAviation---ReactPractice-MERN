const express = require('express')
const aircraftRoute = require('./routes/aircraftRoute')
const airlineRoute = require('./routes/airlineRoute')
const airportRoute = require('./routes/airportRoute')
const countryRoute = require('./routes/countryRoute')
const taxRoute = require('./routes/taxRoute')
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
app.use('/api/country', countryRoute)
app.use('/api/tax', taxRoute)

// Connecting to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})