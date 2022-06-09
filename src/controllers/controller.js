const { count } = require("console"); //?
const { Query } = require("mongoose");
const authorModel = require("../models/authorModel");
const { findOneAndUpdate } = require("../models/bookModel");
const bookModel= require("../models/bookModel");


//Q.1
const createBook = async function(req, res){
    const data = req.body;
    const saveBook = await bookModel.create(data);
    res.send(saveBook);
}

const createAuthor = async function(req, res){
    const data = req.body;
    const saveAuthor = await authorModel.create(data);
    res.send(saveAuthor)
}

//Q.2
const chetanBhagatBooks = async function(req, res){
    const result1 = await authorModel.find({author_name: "Chetan Bhagat"});
    const result2 = result1[0]["author_id"];
    const result3 = await bookModel.find({author_id: result2});
    res.send(result3);
}

//Q.3
const authorAndUpdate = async function(req, res){
    const result1 = await bookModel.findOneAndUpdate(
        {bookName: "Two states"}, //condtion
        {$set: {price: 100}}, //update
        {new: true}
    );
    const idValue = result1["author_id"];
    const authorName = await authorModel.findOne({author_id : idValue}).select({author_name : 1, _id:0});
    const price = result1.price

    res.send({msg:authorName, price})
}
//Q.4
const authorsByPrice = async function(req, res){
    const result1 = await bookModel.find({price: {$gte: 50, $lte :100}}).select({author_id : 1, _id: 0});
    const result3 = await bookModel.find({price: {$gte: 50, $lte :100}}).select({bookName:1, price : 1, _id: 0});//not mandotory
   

    let arr=[];
    for(let i=0; i<result1.length; i++){
       let result2 =  await authorModel.find(result1[i]).select({author_name:1, _id:0})
        arr.push(result3[i], result2)
    }
    // const arr = result1.map((x) =>
    //      authorModel.find({x}).select({ author_name: 1, _id: 0 })
    // )
    res.send({msg: arr})
}
// optional questions : 
//Q.1
const booksById = async function(req, res) {
   
  const pathParams = req.params.authorId;
    const relevantBooks = await bookModel.find({author_id : pathParams}).select({bookName:1, _id:0})
    res.send({msg: relevantBooks});
}

//Q.2
//// const authorByAge = async function(req, res){
//     let author = await authorModel.find({age: {$gte : 50}}).select({author_name: 1, age:1, _id:0, author_id:1});
//     const ids = author.map((x)=> x.author_id);

//     let book = await bookModel.find({ratings: {$gte:4}, author_id: {$in: ids}}).select({_id:0});
//     book = book.map((x)=> x.author_id);
//     author = await authorModel.find({author_name : {$in : book}}).select({autor_name:1, _id:0});

    

//     res.send(author);
// } 



module.exports.createBook= createBook;
module.exports.createAuthor = createAuthor;
module.exports.chetanBhagatBooks = chetanBhagatBooks;
module.exports.authorAndUpdate = authorAndUpdate;
module.exports.authorsByPrice = authorsByPrice;
module.exports.booksByID = booksById;
// module.exports.authorByAge = authorByAge;

