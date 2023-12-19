const axios = require('axios')
require('dotenv').config()

const getAirport = async (req, res, next) => {
  try {
    const {city} = req.query
    const response = await axios.get(`https://api.api-ninjas.com/v1/airports?name=${city}`, {
      headers: {
        'X-API-KEY': process.env.XRAPIDAPIKEY
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
        'X-RapidAPI-Key': process.env.XRAPIDAPIKEY,
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
        ident: icao
      },
      headers: {
        'X-RapidAPI-Key': process.env.XRAPIDAPIKEY3,
        'X-RapidAPI-Host': 'flightera-flight-data.p.rapidapi.com'
      }
    })
    res.status(200).json(response.data)

  } catch (error) {
    next(error) 
  }
}

const airportMetar = async(req, res, next) => {
  try {
    const {icao} = req.query
    const response = await axios.get("https://flightera-flight-data.p.rapidapi.com/airport/metar", {
      params: {
        ident: "wsss"
      },
      headers: {
        'X-RapidAPI-Key': process.env.XRAPIDAPIKEY4,
        'X-RapidAPI-Host': 'flightera-flight-data.p.rapidapi.com'
      }
    })
    res.status(200).json(response.data)
    
  } catch (error) {
    next(error)
  }
}

const airportStatistics = async (req, res, next) => {
  try {
    const {icao} = req.query
    const response = await axios.get("https://flightera-flight-data.p.rapidapi.com/airport/statistics", {
      params:{
        icao: "wmkk"
      },
      headers: {
        'X-RapidAPI-Key': 'e2deeac767mshfbc47f57dfcdfa3p151255jsn532d014773b0',
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
  airportMetar,
  airportStatistics,
}