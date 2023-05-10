const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm")
    const ProductsSchema = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    });
    const ProductsModel = mongoose.model('products',ProductsSchema);
    let data = new ProductsModel({
        name:"m8",
        price:500,
        brand:"Samsung",
        category:"Mobile"
    });
    let result = await data.save();
    console.log(result);

}

main()