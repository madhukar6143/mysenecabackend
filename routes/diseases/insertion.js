const body =require('body-parser')

const diseases = require('../../models/diseases.js')
const mappings = require('../../models/mapping.js');
const { insertmap } = require('./insertmap.js');

let disid=null;
const insertion = async(req,res)=>{
    try{
        console.log(req.body)
    const diseaseName = req.body.disease_name;
    
    const symid = req.body.symptom;
    const disease =  await diseases.findOne({ where: { diseaseName : diseaseName } })

    if(disease){
        return res.status(409).send({message : 'Disease already exists '});
    }
    else{
      await diseases.create({diseaseName : diseaseName})
        .then((result)=>{
            disid = result.diseaseId
        })
    }

    
    inserted = await insertmap(disid,symid)

    if(inserted){
       res.status(200).send({message : "Successfully Inserted..."}) 
    }
    else{
      res.status(401).send({message : "Symptoms are already existed!!!"});
      await diseases.destroy({
        where : {diseaseId : disid }
     })
    }
}
catch(err){
    res.status(500).send({message : "Internel server error!!!"})
}
   
}

module.exports = {insertion};