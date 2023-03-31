const symptoms = require('../../models/symptoms');

const list = async (req, res) => {
    try {
      const sym = await symptoms.findAll(); // retrieve all rows from the users table
      res.send(sym); // send the users array as JSON
    } catch (error) {
      console.log(error);
      res.status(500).send('Error retrieving users');
    }
  };

module.exports = { list };