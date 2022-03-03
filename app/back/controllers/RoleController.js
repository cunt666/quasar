
import Role from '../models/Role.js';
import RoleService from '../services/RoleService.js';

class RoleController {

  async create(req,res){
    try{
      const response = await RoleService.create(req.body);
      res.json(response)
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async getAll(req,res){
    try{
      const response = await RoleService.getAll();
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async getSingle(req,res){
    try{
      const response = await RoleService.getSingle(req.query.id);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async update(req,res){
    try{
      const response = await RoleService.update(req.body);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async delete(req,res){
    try{
      const response = await RoleService.delete(req.query.id);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

}

export default new RoleController();
