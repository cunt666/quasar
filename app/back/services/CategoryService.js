
import Category from '../models/Category.js';

class CategoryService {

  async create(item){
      const response = await Category.create(item);
      return response;
  }

  async getAll(){
      const response = await Category.find();
      return response;
  }

  async getSingle(id){
      const response = await Category.findById(id);
      return response;
  }

  async update(item){
      const response = await Category.findByIdAndUpdate(item._id, item, {new: true} );
      return response;
  }

  async delete(id){
      const response = await Category.findByIdAndDelete(id);
      return response;
  }

}

export default new CategoryService();
