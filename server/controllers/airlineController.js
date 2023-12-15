const axios = require('axios')
require('dotenv').config()

// api ninjas
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

// rapid api
const airlineSearch = async (req, res, next) => {
  try {
    const {icao} = req.query
    const response = await axios.get("https://flightera-flight-data.p.rapidapi.com/airline/search", {
      params: {
        icao: icao
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

// rapid api
const airlineAircraft = async (req, res, next) => {
  try {
    const {ident} = req.query
    const response = await axios.get("https://flightera-flight-data.p.rapidapi.com/airline/aircrafts", {
      params: {
        ident: ident
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

// rapid api
const airlineStatistics = async (req, res, next) => {
  try {
    const {icao} = req.query
    const response = await axios.get("https://flightera-flight-data.p.rapidapi.com/airline/statistics", {
      params: {
        icao: "mas"
      },
      headers: {
        'X-RapidAPI-Key': process.env.XRAPIDAPIKEY2,
        'X-RapidAPI-Host': 'flightera-flight-data.p.rapidapi.com'
      }
    })
    res.status(200).json(response.data)

  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAirline,
  airlineSearch,
  airlineAircraft,
  airlineStatistics
}