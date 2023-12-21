const express = require('express')
const router = express.Router()
const taxController = require('../controllers/taxController')

router.post("/aviation-tax", taxController.aviationTax)

module.exports = router