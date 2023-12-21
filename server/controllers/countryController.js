const axios = require('axios')
require('dotenv').config()

const countrySearch = async (req, res, next) => {
  try {
    const {name} = req.query
    const response = await axios.get("https://aviation-reference-data.p.rapidapi.com/countries/search", {
      params: {
        name: name
      },
      headers: {
        'X-RapidAPI-Key': process.env.XRAPIDAPIKEY4,
        'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com'
      }
    })
    res.status(200).json(response.data)
  } catch (error) {
    next(error)
    
  }
}

module.exports = {
  countrySearch
}
