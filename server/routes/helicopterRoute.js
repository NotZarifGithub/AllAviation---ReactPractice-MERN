const express = require('express')
const router = express.Router()
const helicopterController = require('../controllers/helicopterController')

router.get('/helicopter-search', helicopterController.helicopterSearch)

module.exports = router