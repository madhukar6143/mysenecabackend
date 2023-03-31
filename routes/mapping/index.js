const express = require('express');
const { insertion } = require('./insertion');
const {deletion} = require('./deletion');
const {list} = require('./list');
const {update} =require('./updation')
const {diseaseSearch,symptomSearch} = require('./searching');
const {diseaseSymptoms} = require('./disease-symptom')
const mysql = require("mysql2/promise");
const router = express.Router();

router.post('/insert',insertion);
router.delete('/delete',deletion);
router.get('/list',list);
router.put('/update',update);
router.post('/diseasesearch',diseaseSearch);
router.get('/symptomsearch',symptomSearch);
router.get('/disease-symptoms',diseaseSymptoms)

module.exports = router;

