const body = require('body-parser');
const users = require('../../models/userSignup');
const bcrypt = require('bcryptjs');

const insertion= async(req,res) => {
   try{
    const uname = req.body.userName
    const email = req.body.email;
    const mobile = req.body.mobileNumber;
    const name =  req.body.name;
    const pwd = req.body.password;
    const role= "user"
    const gender = req.body.gender;

      //console.log(uname,gender);
      if(!uname && !email && !mobile && !name && !pwd && !role && !gender)
      return res.status(401).send({message : "All fields are required"})

   const usermail =  await users.findOne({ where: { email : email } }) 

   if(usermail){
       return res.status(409).send({message : 'User already exists...'});
   }


   let pass = await encryption(pwd);
  users.create({ 
    userName : uname,
    email : email,
    mobileNumber : mobile,
    name : name,
    password : pass,
    Role : role,
    gender : gender
  }) 
  .then(() => {
    res.status(200).send({message : "Successfully inserted"})
   }) 
   .catch((error) => {
    console.log(error);
   })
    }
    catch(error)
    {
      console.log(err);
      res.status(500).send({message : "Internel server error!!!"})

    }
  }

  async function encryption(pwd){
    return bcrypt.hash(pwd, 10).then(function(hash) {
        return hash;
    });
  }
  
  


module.exports = { insertion };



  
 
  

