const express = require('express');
const  symptom  = require('./symptoms/index');
const disease= require('./diseases/index');
const map = require('./mapping/index');
const user =require('./users/index');
const app=express();
const {authUser} = require('../middleware/auth')

// function validateUser(req, res, next){
//     return res.status(400).send({error:"invalid user"})
//     return next;
// }
// router.post('/insert', validateUser,insertsymptom);

app.use('/symptom',authUser,symptom);
app.use('/disease',authUser,disease);
app.use('/map',authUser,map);
app.use('/users',user);


module.exports = app;