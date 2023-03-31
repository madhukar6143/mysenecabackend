const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('predict','root','madhu',{
    dialect :'mysql',
    host : 'localhost'
});

module.exports = sequelize;