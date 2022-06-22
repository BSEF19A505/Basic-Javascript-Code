const express = require('express')
const path = require('path');
const { title } = require('process');

const mainpath = require('../util/path')
const adminD = require('./admin');


const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(adminD.products)
    res.render('shop', { prods: adminD.products, pageTitle: 'SHOP', path: '/' });

    //res.sendFile(path.join(mainpath, 'views', 'shop.html'));

    //    res.send('<h1>Hello! I am Mahad Bin Naeem</h1>')
})

module.exports = router;