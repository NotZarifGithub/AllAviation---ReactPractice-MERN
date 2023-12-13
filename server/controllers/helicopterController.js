const axios = require('axios')
require('dotenv').config()

const getHelicopter = async (req, res, next) => {
  try {
    const {manufacturer, model} = req.query
    const response = await axios.get(`https://api.api-ninjas.com/v1/helicopter?manufacturer=${manufacturer}&model=${model}`, {
      headers: {
        'X-API-KEY': process.env.XAPIKEY  
      }
    })

    res.status(200).json(response.data)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getHelicopter
}