const body =require('body-parser')
const mapping = require('../../models/mapping.js')
const find = require('./finding');
const {findDisease,findSymptoms,disFind} = require('./finding');
const diseases = require('../../models/diseases');
const { compareSync } = require('bcryptjs');



const diseaseSearch = async(req,res)=>{

try{
    const symptomId = req.body;
    console.log(symptomId)
    const disid = await disFind(symptomId)
    if(disid===undefined)
    return res.status(404).send({message:"no disease found with that symptoms"})
    const disease =  await diseases.findOne({ where: { diseaseId : disid } })

return res.status(200).send({message:`${disease.diseaseName}`})

}
catch(err)
{
    res.status(500).send({message:"internal server error"})
}

}




const symptomSearch = async(req,res) => {
const diseaseid = req.body.diseaseId
console.log("herer")
const result= await findSymptoms(diseaseid);
return res.status(200).send(result);
}


module.exports = {diseaseSearch, symptomSearch}