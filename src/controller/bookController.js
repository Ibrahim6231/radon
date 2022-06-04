const bookModel = require("../models/bookModel.js");


const addBook = async function(req, res){
    const data = req.body;
    const saveData = await bookModel.create(data);
    res.send({msg: saveData})
}

const getBooks = async function(req, res){
    const getAllBooks = await bookModel.find();
    res.send({msg: getAllBooks})
}

module.exports.addBook = addBook;
module.exports.getBooks = getBooks;