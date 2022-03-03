
import Jwt from 'jsonwebtoken';
import key from '../settings.js';

export default function (req,res,next){
  if(req.method === 'OPTIONS'){
    next();
  }
  try{
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
      return res.status(403).json({message:'User not authorized'});
    }
    const decodeData = Jwt.verify(token, key.options.secret);
    req.user = decodeData;
    next();
  }catch(e){
    return res.status(403).json({message: 'User not authorized'})
  }
}

