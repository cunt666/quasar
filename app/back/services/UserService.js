
import User from '../models/User.js';

class UserService {

  async create(item){
      const response = await User.create(item);
      return response;
  }

  async getAll(){
      const response = await User.find();
      return response;
  }

  async getSingle(id){
      const response = await User.findById(id);
      return response;
  }

  async update(item){
      const response = await User.findByIdAndUpdate(item._id, item, {new: true} );
      return response;
  }

  async delete(id){
      const response = await User.findByIdAndDelete(id);
      return response;
  }

}

export default new UserService();
