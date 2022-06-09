const express = require('express');
const router = express.Router();
const controller= require("../controllers/controller")



router.post('/createBook', controller.createBook );                 //Q.1
router.post('/createAuthor', controller.createAuthor);
router.get('/chetanBhagatBooks', controller.chetanBhagatBooks);
router.get('/authorAndUpdate', controller.authorAndUpdate);
router.get('/authorsByPrice', controller.authorsByPrice);
router.get('/booksByID/:authorId', controller.booksByID); //optional  Q.1
// router.get('/authorByAge', controller.authorByAge);

module.exports = router;