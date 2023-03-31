const express = require('express');
const { insertion } = require('./insertion');
// const { updation} = require('./updation');
const {list} =require("./list");
 const { deletion }=require("./deletion")
 const {login} = require('./login')

const router = express.Router();
router.post('/insert',insertion);
// router.put('/update',updation);
router.get('/list',list);
 router.delete('/delete',deletion);
 router.post('/login',login);

module.exports = router;