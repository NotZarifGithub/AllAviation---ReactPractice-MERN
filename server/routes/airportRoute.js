const express = require('express')
const router = express.Router()
const airportController = require('../controllers/airportController')

router.get('/get-airport', airportController.getAirport)
router.get('/airport-search', airportController.airportSearch)

module.exports = router