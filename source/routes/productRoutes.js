const express = require('express')
const router = express.Router();
const productControllers = require('../controllers/productControllers')

router.get('/cart' , productControllers.cart) 
router.get('/listProducts' , productControllers.listProducts) 

module.exports = router