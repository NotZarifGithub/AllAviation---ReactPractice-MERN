const express = require('express')
const router = express.Router()
const airlineController = require('../controllers/airlineController')

router.get('/get-airline', airlineController.getAirline)
router.get('/airline-search', airlineController.airlineSearch)
router.get('/airline-aircraft', airlineController.airlineAircraft)
router.get('/airline-statistics', airlineController.airlineStatistics)
router.get('/airline-info', airlineController.airlineInfo)

module.exports = router