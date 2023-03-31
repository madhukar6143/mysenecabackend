const body =require('body-parser')
const sequelize =require('sequelize');
const mapping = require('../../models/mapping.js')
const diseases = require('../../models/diseases.js')
const symptoms =require('../../models/symptoms.js')
//const find = require('./finding.js');
const {findDisease,findSymptoms} = require('./finding');

let sym=0;
const deletion =   async (request, response) => {
  const diseaseid = request.body.diseaseId;
  const symptomid = request.body.symptomId;
  symptomid.sort();
  
      const mappings = await mapping.findAll({ where: { diseasesId: diseaseid } })
      
    const symptomsId =[];
    for(let i=0; i<mappings.length; i++){
      symptomsId.push(mappings[i].symptomsId);
    }

      const symarray = symptomsId.filter(element => symptomid.indexOf(element) === -1);
      //console.log(await findDisease(symarray));
      console.log(symarray);


dis=await findDisease(symarray)
for(i=0;i<dis.length;i++){
  const sym1 = await findSymptoms(dis[i])
  sym1.sort(function(a, b){return a-b});
  if(isEqual(symarray,sym1)){
    sym++;
    break;
  }
}
      function isEqual(a, b)
    	{
	      return a.join() == b.join();
	    }


      if(sym == 0){
      let DiseaseId = {
        diseasesId : diseaseid,
          symptomsId : symptomid
      }
        mapping.destroy({where : DiseaseId})
        .then(()=>{
            console.log(request.body)
        })
        .catch((error)=>{
            console.log(error.message)
        })
        response.status(200).send({message:"Successfully Deleted...."})
      }
      else{
        response.status(500).send({message:"Deletion is not possible!!!!"});
      }
      return  response.send()

};

module.exports = {deletion};
