const jwt  =  require('jsonwebtoken')
const secret = 'SenecaGlobal';

function authAdmin(request, response, next) {

  let token = request.headers.authorization.split(' ')[1]
  //console.log(token);
  var decoded = jwt.verify(token, secret, function(err, decoded) {
    if(err)
      console.log(err);
    return decoded;
  });
  if (decoded && decoded.role === 'admin') {
    return next();
  }
  return response.status(401).json({ message: 'authentication Error' });
}

const authUser=async(request, response, next)=> {
 try{
   let token = request.headers.authorization.split(' ')[1]
   //console.log(token);
   var decoded =await jwt.verify(token, secret) 
    
      next();
   }
   catch (err) {
    console.log("exception", err.message)
    // Return an error if the token is not valid
    res.status(401).json({ message: 'Invalid token && Session Expired please Login to continue' });
  }
};

module.exports = {authAdmin,authUser}

const authMiddleware = async (req, res, next) => {
  try {
//     const token = req.headers.authorization.split(' ')[1];
// console.log(token)
//     // Verify the token using the secret key
//     const decoded = await jwt.verify(token, secretKey);

//     // Add the decoded user information to the request object
//     req.user = decoded;
    // Call the next middleware function
    next();
  } catch (err) {
    console.log("exception", err.message)
    // Return an error if the token is not valid
    res.status(401).json({ message: 'Invalid token && Session Expired please Login to continue' });
  }
};