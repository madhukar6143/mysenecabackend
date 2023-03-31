const body = require('body-parser');
const Symptom = require('../../models/symptoms.js');


const getbyid = async (req,res) =>{
    const symptomid = req.body.symptomid;

    let symp = await Symptom.findByPk(symptomid);
    return res.status(200).send(symp);
};

const updatesymptom = async(req,res) => {
    console.log(req.body)
    const symptomId = req.body.symptom_id;
    const symptomName= req.body.symptomName;


    const symptom =  await Symptom.findOne({ where: { symptom_name : symptomName } })

    if(symptom){
        return res.status(409).send({message : 'Symptom already exists!!!'});
    }

    Symptom.findByPk(symptomId)
    .then((symptom) => {
         symptom.symptom_name = req.body.symptomName;
         return symptom.save();
    })
   .then(() =>{
    console.log("updated");
   })
   .catch((error) => {
    console.log(error);
   })
   return res.status(200).send({ message : "Successfully updated"})
}

module.exports = { getbyid ,
    updatesymptom }