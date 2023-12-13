const axios = require('axios')
require('dotenv').config()

const getAirline = async (req, res, next) => {
  try {
    const {country} = req.query
    const response = await axios.get(`https://api.api-ninjas.com/v1/airlines?name=${country}`, {
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
  getAirline
}