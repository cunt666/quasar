
import Posts from '../models/Posts.js';

class PostsService {

  async create(item){
      const response = await Posts.create(item);
      return response;
  }

  async getAll(){
      const response = await Posts.find();
      return response;
  }

  async getSingle(id){
      const response = await Posts.findById(id);
      return response;
  }

  async update(item){
      const response = await Posts.findByIdAndUpdate(item._id, item, {new: true} );
      return response;
  }

  async delete(id){
      const response = await Posts.findByIdAndDelete(id);
      return response;
  }

}

export default new PostsService();
