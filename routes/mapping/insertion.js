const body =require('body-parser')
const diseases = require('../../models/diseases.js')
const symptoms = require('../../models/symptoms.js')
const mapping = require('../../models/mapping.js')
const {Op,Sequelize} = require('sequelize');
const {findDisease,findSymptoms} = require('./finding');

function isEqual(a, b)
	{
	return a.join() == b.join();
	}

const insertion = async (req, res) => {
  const disid = req.body.diseaseId;
  const symid = req.body.symptomId;
  symid.sort(function(a, b){return a-b});

  let sym=0;
dis=await findDisease(symid)
for(i=0;i<dis.length;i++){
  const sym1 = await findSymptoms(dis[i])
  sym1.sort(function(a, b){return a-b});
  if(isEqual(symid,sym1)){
    sym++;
    break;
  
  }
}



       if(sym!=0){
        res.status(401).send("Not possible to insert!!!");
       }
        
       else{
          symid.sort(function(a, b){return a-b});
       for (let i = 0;i<symid.length;i++){ 
        let check = await mapping.findOne({ where : { diseasesId : disid, symptomsId : symid[i]}})
        if(check){
          console.log("Already Existed....");
        }
        else {
        mapping.create({ diseasesId: disid, symptomsId: symid[i] })
            .then(()=>{
                console.log(req.body)
            })
            .catch((error)=>{
                console.log(error)
            })
          }
         }
          return  res.send()
    } 
  






  }
module.exports = {insertion};