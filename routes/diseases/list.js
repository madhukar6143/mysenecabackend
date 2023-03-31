const diseases =require('../../models/diseases.js');

const list = async (request, response) => {
    try {
      const disease= await diseases.findAll(); 
      response.status(200).send(disease)
    } catch (error) {
      console.log(error);
      response.status(500).send({message:'Error retrieving users'});
    }
  };

module.exports = { list };