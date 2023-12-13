const express = require('express')
const router = express.Router()
const aircraftController = require('../controllers/aircraftController')

router.get('/get-aircraft', aircraftController.getAircraft)

module.exports = router