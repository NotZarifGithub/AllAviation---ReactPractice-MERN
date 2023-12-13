const axios = require('axios')
require('dotenv').config()

const getAirport = async (req, res, next) => {
  try {
    const {city} = req.query
    const response = await axios.get(`https://api.api-ninjas.com/v1/airports?name=${city}`, {
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
  getAirport,
}