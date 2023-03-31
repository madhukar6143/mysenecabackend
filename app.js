const express = require('express');

const sequelize = require('./db/connection');
const routes = require('./routes/index');
var bodyParser = require('body-parser')
// const symptom = require("./adminoperations/symptoms/tabcreation")


const cors = require('cors');
const corsOptions ={
    origin:["http://localhost:3000"],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors(corsOptions));


sequelize
  .authenticate()
  .then(() => {
    console.log('connection established successfully');
  })
  .catch((error) => {
    console.log(error);
    console.log('error in establishing');
  })

app.use('/api',routes)

app.listen(3031,()=>{
    console.log("listening at 3031");
})



