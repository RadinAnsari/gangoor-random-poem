const axios = require('axios');
require('dotenv').config(); // Load environment variables
const {searchPoet} = require('./searchPoet')

const API_URL = process.env.API_URL; // Fetch API URL from .env


async function getRandomPoem(name) {
  try {
  
    const poet = searchPoet(name);

    const response = await axios.get(API_URL+`${poet.id}`);
    

    return response.data;
  } catch (error) {
    console.error('Error fetching poem:', error.message);
    return 'Could not fetch poem at the moment.';
  }
}

module.exports = {getRandomPoem};
