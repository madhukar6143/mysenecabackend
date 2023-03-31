const sequelize =require('../db/connection.js')
const symptoms = require('./symptoms.js')
const diseases =  require('./diseases.js')

const Sequelize = require('sequelize')

const Mapping =sequelize.define("mapping",{
    mappingId :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },  
    diseasesId :{
        type : Sequelize.INTEGER,
    },
    symptomsId :{
        type : Sequelize.INTEGER,
    },
});

Mapping.belongsTo(symptoms,{
    foreignKey : "symptomsId",
    targetKey : "symptomId"
});

Mapping.belongsTo(diseases,{
    foreignKey : "diseasesId",
    targetKey : "diseaseId"
});

Mapping.sync()

module.exports = Mapping;