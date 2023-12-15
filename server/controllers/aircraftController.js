const axios = require('axios');
require('dotenv').config();

// api ninjas
const getAircraft = async (req, res, next) => {
  try {
    const { manufacturer, model} = req.query

    const response = await axios.get(
      `https://api.api-ninjas.com/v1/aircraft?manufacturer=${manufacturer}&model=${model}`, {
        headers: {
          'X-Api-Key': process.env.XAPIKEY
        }
      });

    res.status(200).json(response.data); 
  } catch (error) {
    next(error);
  }
}

// rapid api
const aircraftSearch = async (req, res, next) => {
  try {
    const {model} = req.query
    const response = await axios.get("https://flightera-flight-data.p.rapidapi.com/aircraft/search", {
      params: {
        model: model
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
const aircraftInfo = async (req, res, next) => {
  try {
    const {registration} = req.query
    console.log('Registration Number:', registration);
    const response = await axios.get("https://flightera-flight-data.p.rapidapi.com/aircraft/info", {
      params: {
        reg: `${registration}`
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

module.exports = {
  getAircraft,
  aircraftSearch,
  aircraftInfo
};
