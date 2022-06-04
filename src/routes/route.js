const express = require('express');
const router = express.Router();
const bookController = require("../controller/bookController");


router.post("/addBook", bookController.addBook );
router.get("/getAllBooks", bookController.getBooks);



module.exports = router;