const express = require('express')
const router = express.Router()
const airlineController = require('../controllers/airlineController')

router.get('/get-airline', airlineController.getAirline)

module.exports = router