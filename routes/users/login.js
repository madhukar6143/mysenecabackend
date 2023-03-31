const users = require('../../models/userSignup')
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const secret = 'SenecaGlobal';

const login = async (request,response) =>{
try{
    
    const email = request.body.email;
    const password =request.body.password;
        if(!email){
            return response.status(400).send({message:"email is required!!!"});
        }
        if(!password){
            return response.status(400).send({message:"Password is required!!!"});
        }
        const user = await users.findOne({
            where: { email:email}
          })
         //console.log(user.Role);
        if(user){
            const match = await bcrypt.compare(String(password), user.password);
            if(match){
                const token = jwt.sign({
                    userName: user.userName,
                    role:user.Role
                }, secret);
                return response.status(200).send({ message: "Login successful", token:token ,role:user.Role,username:user.username})
            }  
           else{
                return response.status(401).send({message:"Invalid credential!!!"});
                }
        }else{
            return response.status(404).send({message:"User not found!!!"});
        }
    }
    catch(err){
        console.log(err);
        response.status(500).send({message : "Internel server error!!!"})
    }
}

module.exports = {login};