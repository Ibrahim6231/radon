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




module.exports.createBook= createBook;
module.exports.createAuthor = createAuthor;
module.exports.chetanBhagatBooks = chetanBhagatBooks;
module.exports.authorAndUpdate = authorAndUpdate;
module.exports.authorsByPrice = authorsByPrice;

