const express = require('express')
const router = express.Router();
const userControllers = require('../controllers/userControllers')

router.get('/login' , userControllers.login) 
router.get('/contact' , userControllers.contact) 

module.exports = router