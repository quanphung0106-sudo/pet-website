const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : String,
    price: String,
    description: String,
    quantity: Number,
    // images:[{
    //     type: String
    // }]
})

exports.Product = mongoose.model('Product', productSchema);