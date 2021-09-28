const express = require("express");
// const { deleteOne } = require("../models/productModel");
const router = express.Router();
const product = require('../models/productModel')
const authentication = require('../middleware/authentication');
const bcryptjs=require('bcryptjs')
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const upload = require('../middleware/upload')



//inserting product here
router.post('/product/insert', upload.single('productImage'), function (req, res) {
    // console.log(req.file);
    if (req.file == undefined) {
        return res.status(400).json({ message: "Invalid file format" })
    }
    const productName = req.body.productName;
 
    const productImage = req.file.filename;
    const productDescription = req.body.productDescription;


    const me = new product({
        productName: productName,  productImage: productImage,
        productDescription: productDescription
    })

   me.save().then(function (result) {
        res.status(201).json({ message: "Product has been inserted successfully !!!" });
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })

})

//PRODUCT DELETE
router.delete('/product/delete/:id', function (req, res) {

    const id = req.params.id;
    product.deleteOne({ _id: id })
        .then(function (result) {
            res.status(200).json({ message: "Product has been deleted successfully !!!", status: "true" })
        })
        .catch(function (err) {
            res.status(500).json({ message: err, status: "false" })
        })
})

//PRODUCT UPDATE
router.put('/product/update/:id',function (req, res) {
    const id = req.params.id;
    const productName = req.body.productName
  
    const productDescription = req.body.productDescription

    
  product.updateOne({_id: id}, {productName: productName}).then(function (result) {
        res.status(200).json({ message: "updated" }) 
    })
        


            product.updateOne({_id: id}, {productDescription: productDescription}).then(function (result) {
                res.status(200).json({ message: "updated" })
            }).catch(function (e) {
        res.status(500).json({ message: e, status:false })
    })
})



//gets all info
router.get('/product/all', function (req, res) {
    product.find().then(function(data){
        console.log(data)
        res.status(200).json({
            productData: data
        })
    }).catch(function (e) {
        res.status(500).json(e)
    })
})


//to show only single element
router.get('/product/single/:id', function (req, res) {
    const id = req.params.id;
    product.findOne({ _id: id }).then(function (data) {
        res.status(200).json({data})
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})



module.exports = router