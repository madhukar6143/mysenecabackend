const mapping = require('../../models/mapping.js')

const list = async (request, response) => {
    try {
      const map= await mapping.findAll(); 
      response.send(map); 
    } catch (error) {
      console.log(error);
      response.status(500).send('Error retrieving users');
    }
  };

module.exports = { list };