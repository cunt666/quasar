import mongoose from 'mongoose';

const Category = new mongoose.Schema({
    
      value : {
        
          type : Array,
        
          unique : true,
        
          default : 'Posts',
        
      },
    
})

export default mongoose.model('Category', Category);
