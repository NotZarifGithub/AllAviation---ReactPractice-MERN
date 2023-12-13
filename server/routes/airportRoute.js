const express = require('express')
const router = express.Router()
const airportController = require('../controllers/airportController')

router.get('/get-airport', airportController.getAirport)

module.exports = router