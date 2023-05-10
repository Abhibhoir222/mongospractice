const mongoose = require('mongoose');

 mongoose.connect("mongodb://localhost:27017/e-comm")
const ProductsSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const saveInDB = async ()=>{
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

const updateInDB = async ()=>{
    const product =  mongoose.model('products',ProductsSchema);
    let data = await product.updateOne(
        {name:"note 6"},
        {
            $set:{price:500}
        }
    )
    console.log(data);
}

updateInDB()