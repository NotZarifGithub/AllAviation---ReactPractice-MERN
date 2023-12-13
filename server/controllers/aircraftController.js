const axios = require('axios');
require('dotenv').config();

const getAircraft = async (req, res, next) => {
  try {
    const { manufacturer, model} = req.query

    const response = await axios.get(
      `https://api.api-ninjas.com/v1/aircraft?manufacturer=${manufacturer}&model=${model}`,
      {
        headers: {
          'X-Api-Key': process.env.XAPIKEY
        }
      }
    );

    res.status(200).json(response.data); 
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAircraft,
};
