import mongoose from "mongoose";
const subCategorySchema = mongoose.Schema({
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      
      ref:'category'
    },
    subCategory: {
      type: String,
      required: true,    
    },
  
  });
  export default mongoose.model('subcategory',subCategorySchema)