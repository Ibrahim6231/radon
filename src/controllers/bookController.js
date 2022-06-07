const { count } = require("console") //?
const bookModel= require("../models/bookModel")

//Q.1
const createBook = async function(req, res){
    const data = req.body;
    const saveBook = await bookModel.create(data);
    res.send(saveBook);
}

//Q.2
const bookList = async function(req, res){
    const findBook = await bookModel.find().select({bookName:1, authorName:1, _id: 0})
    res.send(findBook);
}

// Q.3
const getBooksInYear = async function(req, res){
    const pathParams = req.params.byYear
    // const pathParams2 = Number(pathParams)// not required this step
    const gBIY = await bookModel.find({year : pathParams});
    res.send(gBIY);
}

//Q.4
const getParticularBooks = async function(req,res){
    const random = req.body; 
    const showRandom = await bookModel.find(random); 
    res.send(showRandom);
}

//Q.5
const getXINRBooks = async function(req, res){
    const getBooksByPrice = await bookModel.find({"price.indianPrice": {$in: ["₹100", "₹200", "₹500"]}});
    res.send(getBooksByPrice)
}

//Q.6
const getRandomBooks = async function(req, res){
    const getBooks = await bookModel.find({
        $or:[{stockAvailable: true}, {totalPages :{$gt:500}}] 
    });
    res.send(getBooks)
}




module.exports.createBook= createBook;
module.exports.bookList = bookList;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getBooksInYear = getBooksInYear;
