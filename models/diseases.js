const sequelize = require('../db/connection.js')
const Sequelize = require('sequelize')

const diseases =sequelize.define("diseases",{
    diseaseId:{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
       
    },
    diseaseName:{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    }
})

diseases.sync()

module.exports = diseases;