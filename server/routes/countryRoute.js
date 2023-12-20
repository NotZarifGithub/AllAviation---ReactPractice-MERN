const express = require('express')
const router = express.Router()
const countryController = require('../controllers/countryController')

router.get("/country-search", countryController.countrySearch)

module.exports = router