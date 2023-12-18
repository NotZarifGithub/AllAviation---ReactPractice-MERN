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

const airportSearch = async (req, res, next) => {
  try {
    const {country} = req.query
    const response = await axios.get("https://flightera-flight-data.p.rapidapi.com/airport/search", {
      params: {
        country: country
      },
      headers: {
        'X-RapidAPI-Key': '603d1c6850msh0acff2c71a4a1a0p1bb069jsn1a560b213e57',
        'X-RapidAPI-Host': 'flightera-flight-data.p.rapidapi.com'
      }
    })
    res.status(200).json(response.data)

  } catch (error) {
    next(error) 
  }
}

const airportInfo = async (req, res, next) => {
  try {
    const {icao} = req.query
    const response = await axios.get("https://flightera-flight-data.p.rapidapi.com/airport/info", {
      params: {
        icao: icao
      },
      headers: {
        'X-RapidAPI-Key': '603d1c6850msh0acff2c71a4a1a0p1bb069jsn1a560b213e57',
        'X-RapidAPI-Host': 'flightera-flight-data.p.rapidapi.com'
      }
    })
    res.status(200).json(response.data)

  } catch (error) {
    next(error) 
  }
}

module.exports = {
  getAirport,
  airportSearch,
  airportInfo,
}