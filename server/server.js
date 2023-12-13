const express = require('express')
const aircraftRoute = require('./routes/aircraftRoute')
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

// Connecting to server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})