const mongoose = require('mongoose')

let bookings = new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    ownerId:{
        type:String,
        required:true
    },
    requesterId:{
        type:String,
        required:true
    },
    requesterAddress:{
        type:String,
        required:true
    }
},{timestamps:true})

let bookingsModel = mongoose.model('bookings',bookings)

module.exports = {
    bookingsModel
}