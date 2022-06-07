const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController")



router.post('/createBook', bookController.createBook );                 //Q.1
router.get('/bookList', bookController.bookList);                       //Q.2
router.get('/getBooksInYear/:byYear', bookController.getBooksInYear);   //Q.3
router.post('/getParticularBooks', bookController.getParticularBooks);  //Q.4
router.get('/getXINRBooks', bookController.getXINRBooks);               //Q.5
router.get('/getRandomBooks', bookController.getRandomBooks);           //Q.6

module.exports = router;