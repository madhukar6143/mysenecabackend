const sequelize = require('../../db/connection');
const users = require('../../models/userSignup');

const list = async (req, res) => {
    try {
      const user = await users.findAll(); // retrieve all rows from the users table
      res.send(user); // send the users array as JSON
    } catch (error) {
      console.log(error);
      res.status(500).send('Error retrieving users');
    }
  };

module.exports = { list };