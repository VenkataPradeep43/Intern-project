const mongoose = require('mongoose')

let produts =new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    name:{
        type:String,
        required:true
    },
    imageUri :{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})

let productsModel = mongoose.model('products',produts)

module.exports = {
    productsModel
}