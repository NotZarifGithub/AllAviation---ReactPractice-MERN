const express = require('express')
const router = express.Router()
const aircraftController = require('../controllers/aircraftController')

router.get('/get-aircraft', aircraftController.getAircraft)
router.get('/aircraft-search', aircraftController.aircraftSearch)
router.get('/aircraft-info', aircraftController.aircraftInfo)

module.exports = router