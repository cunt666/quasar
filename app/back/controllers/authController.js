
import User from '../models/User.js';
import Role from '../models/Role.js';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import Jwt from 'jsonwebtoken';
import key from '../settings.js';

const generateAccessToken = (id,roles)=>{
  const payload = { id, roles };
  return Jwt.sign(payload,key.options.secret,{expiresIn: "24h"})
}

class authController{

   async registration(req,res){
     try{
       const errors = validationResult(req);
       if(!errors.isEmpty()){
         return res.status(400).json({message:'Something went wrong', errors})
       }
       const {username, password, roles} = req.body;
       const candidate = await User.findOne({username})
       if(candidate){
         return res.status(400).json({message:'Username is taken'})
       }
       const hashPass = bcrypt.hashSync(password, 7);
       let userRole = await Role.findOne({value:roles[0]})
       if(!userRole&&roles[0]!='Admin'){
           userRole = new Role({value:roles[0]})
       }
       const user = new User({username,password: hashPass,roles: [userRole.value]})
       await user.save();
       return res.json({message: "Success"})
     }catch(e){
       console.log(e)
       res.status(400).json({message:'Registration error'})
     }
   }

   async login(req,res){
     try{
       const {username,password} = req.body
       const user = await User.findOne({username})
       if(!user){
         return res.status(400).json({message: 'Incorrect data'})
       }
       const validPassword = bcrypt.compareSync(password, user.password)
       if(!validPassword){
         return res.status(400).json({message: 'Incorrect data'})
       }
       const token = generateAccessToken(user._id, user.roles);
       return res.status(200).json({token,name:username,role: user.roles, _id:user._id ,info: user.info})
     }catch(e){
        return res.status(500).json(e);
     }
   }

   async getUsers(req,res){
     try{
       const users = await User.find();
       res.json(users);
     }catch(e){

     }
   }

   async checkUsers(req,res){
     try{
       const {username} = req.body
       const user = await User.findOne({username})
       if(user){
         return res.status(400).json({message: 'Founded'})
       }
       return res.json({message: 'Not found'})
     }catch(e){
        return res.status(500).json(e.message);
     }
   }

   async deleteUser(req,res){
     try{
       if(!req.params.id){
         return res.status(400).json({message:'User not found'});
       }
       const user = await User.findByIdAndDelete(req.params.id);
       return res.json(user);
     } catch(e){
       return res.status(500).json(e.message);
     }
   }

   async update(req,res){
     try{
       console.log(req)
       var img = req.files?req.files:req.body.picture||"customPost.jpg";
       let fileName = img
       if(img.file){
           fileName = FileService.saveFile(img.file);
       }
       if(!req.body._id){
         throw new Error('ID not found')
       }
       req.body.picture = fileName
       const updatedPost = await User.findByIdAndUpdate(req.body._id, req.body, {new: true} );
       return res.json(updatedPost);
     } catch(e){
       console.log(e)
       res.status(500).json(e.message);
     }
   }

}

export default new authController();
