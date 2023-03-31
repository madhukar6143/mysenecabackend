const users= require('../../models/userSignup')
const body =require('body-parser')

const deletion= async (request,response)=>{
  
    const Delete =  request.body.username 
    
    const user =  await users.findOne({ where: { username : Delete } })

    if(!user){
        return response.status(500).send('User Not exists');
    }
    else{
    users.destroy({
       where : { username : Delete }
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error.message)
    })
    return response.send()
 }
}

module.exports ={ deletion };