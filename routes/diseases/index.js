const express = require('express');
const { insertion } = require('./insertion');
const { updation, getbyid} = require('./updation');
const {deletion} =require('./deletion');
const {list} =require("./list");
const bodyParser =require('body-parser')

const router = express.Router();

router.post('/insert',insertion);
router.get('/getbyid',getbyid);
router.put('/update',updation);
router.delete('/delete/:diseaseId',deletion);
router.get('/list',list);


module.exports =  router ;