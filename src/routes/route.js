const express = require('express');
const router = express.Router();
const controller= require("../controllers/controller")



router.post('/createBook', controller.createBook );                 //Q.1
router.post('/createAuthor', controller.createAuthor);
router.get('/chetanBhagatBooks', controller.chetanBhagatBooks);
router.get('/authorAndUpdate', controller.authorAndUpdate);
router.get('/authorsByPrice', controller.authorsByPrice);

module.exports = router;