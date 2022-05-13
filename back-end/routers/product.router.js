const {Product} = require('../models/product.model');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const productList = await Product.find();

    if(!productList) {
        res.status(500).json({success: false})
    } 
    res.send(productList);
})

router.post(`/`, (req, res) =>{
    let product = new Product({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
        quantity:req.body.quantity,
        // image : req.body.image,
    })

    product.save().then((createdProduct=> {
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports =router;