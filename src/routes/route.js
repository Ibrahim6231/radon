const express = require('express');
const router = express.Router();

const controller= require("../controllers/controller")

router.post('/createAuthor', controller.createAuthor);//1
router.post('/createPublisher', controller.createPublisher);//2
router.post('/createBook', controller.createBook);//3
router.get('/listBooksWithAuthorsAndPublishers', controller.listBooks); //4
router.put('/isHardCoverFalse', controller.putCover);//5a
router.put('/increasePrice', controller.increasePrice);//5b



module.exports = router;