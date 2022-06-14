const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');
const middleware = require('../middlewares/commonMiddlewares.js');


router.post('/createProduct', controller.createProduct); //Q.1
router.post('/createUser', middleware.checkHeaders, controller.createUser); //Q.2
router.post('/createOrder', middleware.checkHeaders, middleware.checkId, controller.createOrder) //Q3






module.exports = router;