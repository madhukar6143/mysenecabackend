const symptoms= require('../../models/symptoms')
const mapping = require('../../models/mapping')
const {disFind} = require('../mapping/finding')

const deletion= async (request,response)=>{
  
  console.log(request.params)
  const symptomId = parseInt(request.params.id) 
  let arr =[symptomId]

   if(!disFind(arr)){
    return response.status(409).send({message : "Not possible to delete"});
   }
   else{
     symptoms.destroy({
       where : { symptomId : symptomId }
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error.message)
    })
    return response.status(200).send({message:"Deletion successful"}) 
  }
  
}

module.exports ={ deletion };