
import Posts from '../models/Posts.js';
import PostsService from '../services/PostsService.js';

class PostsController {

  async create(req,res){
    try{
      const response = await PostsService.create(req.body);
      res.json(response)
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async getAll(req,res){
    try{
      const response = await PostsService.getAll();
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async getSingle(req,res){
    try{
      const response = await PostsService.getSingle(req.query.id);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async update(req,res){
    try{
      const response = await PostsService.update(req.body);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

  async delete(req,res){
    try{
      const response = await PostsService.delete(req.query.id);
      return res.json(response);
    } catch(e){
      res.status(500).json(e.message);
    }
  }

}

export default new PostsController();
