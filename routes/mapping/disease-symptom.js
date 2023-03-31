const db = require("../config").db
const mysql = require("mysql2/promise");



const diseaseSymptoms =async(req,res)=>{
    try {
        // Attempt to connect to the MySQL database
        let connection = await mysql.createConnection(db);
        // Create a SQL query for retrieving all the existing diseases and their symptoms from the database
        let sql = `SELECT d.diseaseId, d.diseaseName, s.symptomId, s.symptom_name
          FROM mappings m
          JOIN diseases d ON d.diseaseId = m.diseasesId
          JOIN symptoms s ON s.symptomId = m.symptomsId`;
    
        // Execute the SQL query and retrieve the result
        const [results] = await connection.execute(sql)
    
        
    
        const data = {};
    
        for (const result of results) {
          const diseaseId = result.diseaseId;
          const diseaseName = result.diseaseName;
          const symptomId = result.symptomId;
          const symptomName = result.symptom_name;
    
          if (!data[diseaseId]) {
            data[diseaseId] = {
              diseaseName,
              symptoms: [],
            };
          }
    
          data[diseaseId].symptoms.push({ symptomId, symptomName });
        }
    
        const dataArray = Object.entries(data).map(([diseaseId, { diseaseName, symptoms }]) => ({
          diseaseId,
          diseaseName,
          symptoms,
        }));
    
        // Send a 200 status with the success message
        res.status(200).send(dataArray);
      } catch (err) {
        // If there is an error, log the error and send a 500 internal server error status
        console.log(err);
        return res.status(500).send({ message: err.message });
      }
    }

    module.exports ={ diseaseSymptoms };