const diseases= require('../../models/diseases.js')

const deletion = async(request,response) => {
  try{
    
    const Delete =  parseInt(request.params.diseaseId) 
    console.log(Delete)
    await diseases.destroy({
       where : {diseaseId :  Delete}
    })
    
    return response.status(200).send({message : "Disease Deleted successfully"});
}
catch(error)
{
    return response.status(500).send({message:"Internal server error"})
} 
}

module.exports ={ deletion };