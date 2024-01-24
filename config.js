const mongoose =require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');

// const connectDB =async ()=>{
//     mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');
//     const productSchema = new mongoose.Schema({});                         
//     const product= mongoose.model('product',productSchema);
//     const data = await product.find();
//     console.log(data);
// }
// connectDB();