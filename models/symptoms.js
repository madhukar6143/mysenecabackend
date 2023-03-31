const sequelize = require('sequelize');
const Sequelize = require('../db/connection');

const symptoms = Sequelize.define('symptoms', {
    symptomId :{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        
    },
    symptom_name :{
        type :sequelize.STRING,
        allowNull :false,
        unique: true,
    }

})

symptoms.sync();

module.exports = symptoms;