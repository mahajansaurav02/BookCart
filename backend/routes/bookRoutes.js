import express from 'express'
import Product from './../models/productModel';

const bookRouter=express.Router()
const Product=require('../models/productModel')

bookRouter.post('/',async(req,res)=>{
    try {
        const {name,slug,image,brand,category,description,price,countInStock}=req.body
let book=new Product({
    name,
    slug,
    image,
    brand,
    category,
    description,
    price,
    countInStock
})
        await book.save();
    } catch (error) {
        console.log(error)
    }

    if(!book){
        return res.status(500).json({message:'Unable to add'})
    }

    return res.status(201).json({book})
})
