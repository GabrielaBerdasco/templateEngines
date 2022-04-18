const express = require('express');
const { Router } = express
const { getProducts, saveProduct } = require('../controllers/container.js')

const routerProducts = Router()

routerProducts.get('/products', (req, res) => {
    let products = getProducts()
    res.render('table', { products: products })
})

routerProducts.post('/products',(req, res) => {
    let newProduct = req.body
    saveProduct(newProduct)
    res.redirect('/products');
})


module.exports = routerProducts