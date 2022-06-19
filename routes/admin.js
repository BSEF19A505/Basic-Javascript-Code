const express = require('express')
const path = require('path')
const mainpath = require('../util/path')

const router = express.Router();

const products = [];

// /admin/home => GET
router.get('/addproduct', (req, res, next) => {
    res.sendFile(path.join(mainpath, 'views', 'addproduct.html'));

    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type = "submit">Add Product</button></form>')

})

// /admin/product => POST
router.post('/addproduct', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

exports.routes = router;
exports.products = products;