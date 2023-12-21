const axios = require('axios');
require('dotenv').config();

const aviationTax = async (req, res, next) => {
  try {
    const { search } = req.body;
    const response = await axios.post(
      "https://flight-tracker-radar.p.rapidapi.com/FlightsAviationTaxes",
      {
        limit: 30,
        offset: 0,
        search: search
      },
      {
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.XRAPIDAPIKEY4,
          'X-RapidAPI-Host': 'flight-tracker-radar.p.rapidapi.com'
        }
      }
    );
    res.status(200).json(response.data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  aviationTax
};
