const sequelize =require('../db/connection.js');

const Sequelize =require('sequelize');

const users = sequelize.define("users",{
    userId :{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,       
    },
    userName:{
        type: Sequelize.STRING,
        allowNull :false,
        
    },
    email:{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true,
       
    },
    mobileNumber:{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    name:{
        type : Sequelize.STRING,
        allowNull : false,
    },
    password :{
           type : Sequelize.STRING,
           allowNUll : false,
    },
    Role :{
        type : Sequelize.STRING,
        allowNull :false,
    },
    gender:{
        type : Sequelize.STRING,
        allowNull : false,
    }
})

users.sync()

module.exports=users;
