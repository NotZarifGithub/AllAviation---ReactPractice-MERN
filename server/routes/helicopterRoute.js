const express = require('express')
const helicopterController = require('../controllers/helicopterController')
const router = express.Router()

router.get('/get-helicopter', helicopterController.getHelicopter)

module.exports = router