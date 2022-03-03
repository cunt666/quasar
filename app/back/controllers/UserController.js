
import User from '../models/User.js';
import UserService from '../services/UserService.js';

class UserController {

  async create(req,res){
    try{
      const response = await UserService.create(req.body);
      res.json(response)
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async getAll(req,res){
    try{
      const response = await UserService.getAll();
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async getSingle(req,res){
    try{
      const response = await UserService.getSingle(req.query.id);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async update(req,res){
    try{
      const response = await UserService.update(req.body);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async delete(req,res){
    try{
      const response = await UserService.delete(req.query.id);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

}

export default new UserController();
