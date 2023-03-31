const mapping = require('../../models/mapping.js')
const  {findDisease}= require('./finding')
const {disFind}=require('./finding.js')
const update = async (req,res) => {
 
    try{
   const diseaseid = req.body.diseaseId
   const symptomid = req.body.symptoms
   console.log(diseaseid,symptomid)
  if(await disFind(symptomid,diseaseid))
  {
  return  res.status(409).send({message:"same symtpoms present "})
  }

     await mapping.destroy({
         where : { diseasesId : diseaseid }
      }) 
      
      for(let i = 0;i<symptomid.length;i++){ 
         mapping.create({ diseasesId: diseaseid, symptomsId: symptomid[i] })
         .then(()=>{
             console.log(req.body)
         })
         .catch((error)=>{
             console.log(error)
         })
        }
         return res.status(200).send({message : "successfully updated" });
    }
    
        catch(err)
        {
            console.log(err)
            res.status(500).send({message:"Internal server error"})
        }
   
  
}

module.exports = {update};