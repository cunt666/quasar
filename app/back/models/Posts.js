import mongoose from 'mongoose';

const Posts = new mongoose.Schema({
    
      author : {
        
          type : String,
        
          required : true,
        
      },
    
      title : {
        
          type : String,
        
          required : true,
        
      },
    
      content : {
        
          type : String,
        
          required : true,
        
      },
    
      picture : {
        
          type : String,
        
      },
    
      category : {
        
          type : Array,
        
          ref : 'Category',
        
      },
    
      isPage : {
        
      },
    
})

export default mongoose.model('Posts', Posts);
