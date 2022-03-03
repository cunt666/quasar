
import Role from '../models/Role.js';

class RoleService {

  async create(item){
      const response = await Role.create(item);
      return response;
  }

  async getAll(){
      const response = await Role.find();
      return response;
  }

  async getSingle(id){
      const response = await Role.findById(id);
      return response;
  }

  async update(item){
      const response = await Role.findByIdAndUpdate(item._id, item, {new: true} );
      return response;
  }

  async delete(id){
      const response = await Role.findByIdAndDelete(id);
      return response;
  }

}

export default new RoleService();
