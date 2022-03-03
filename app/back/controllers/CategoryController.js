
import Category from '../models/Category.js';
import CategoryService from '../services/CategoryService.js';

class CategoryController {

  async create(req,res){
    try{
      const response = await CategoryService.create(req.body);
      res.json(response)
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async getAll(req,res){
    try{
      const response = await CategoryService.getAll();
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async getSingle(req,res){
    try{
      const response = await CategoryService.getSingle(req.query.id);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async update(req,res){
    try{
      const response = await CategoryService.update(req.body);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async delete(req,res){
    try{
      const response = await CategoryService.delete(req.query.id);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

}

export default new CategoryController();
