const authorModel = require('../models/authorModel.js')
const publisherModel = require('../models/publisherModel.js')
const bookModel = require('../models/bookModel.js')

//Q.1 Write a POST api that creates an author from the details in request body
    const createAuthor = async function (req, res) {
    const data = req.body;
    const save = await authorModel.create(data);
    res.send(save)
}

//Q.2  Write a POST api that creates a publisher from the details in the request body
const createPublisher = async function (req, res) {
    const data = req.body;
    const save = await publisherModel.create(data);
    res.send(save)
}

//Q.3 Write a POST api that creates a book from the details in the request body including edge cases.
const createBook = async function (req, res) {
    const data = req.body;

    const inAuthor = await authorModel.findById(data.author);
    const inPublisher = await publisherModel.findById(data.publisher);
    if (data.author) {
        if (inAuthor) {
            if (data.publisher) {
                if (inPublisher) {
                    const save = await bookModel.create(data);
                    res.send(save)
                } else { res.send("error: This publisher is not present in newPublishers collection") }
            } else { res.send("publisher's id detail is required") }
        } else { res.send("error: This author is not present in newAuthor collection") }
    } else { res.send("author's id detail is required") }

}

//Q.4 Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details
const listBooks = async function (req, res) {
    const allBooks = await bookModel.find().populate('author').populate('publisher')    //.populate(['author', publisher])
    res.send(allBooks)
}

//Q.5 Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

const putCover = async function (req, res) {
    let reqID = await publisherModel.find({ name: { $in: ["HarperCollins", "Penguin"] } })
    reqID = reqID.map((x) => x._id)

    const submit = await bookModel.find({ publisher: { $in: reqID } }).updateMany({ $set: { isHardCover: true } });
    const updatedBooks = await bookModel.find({ isHardCover: true }).populate({path:'publisher', select: 'name'}).select({name:1, publisher:1, isHardCover:1, _id:0 })
 
    res.send({ msg: updatedBooks })
}

// b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 
const increasePrice = async function(req, res){
    const highRatedAuthors = await authorModel.find({rating: {$gt : 3.5}})
    const onlyID = highRatedAuthors.map((x)=> x._id);

    const updatePrice = await bookModel.find({author: {$in: onlyID}}).updateMany({$inc:{price :10}});
    const updatePriceshow = await bookModel.find({author: {$in: onlyID}}).select({price:1, _id:0})
    res.send({msg: updatePriceshow});
}





module.exports.createAuthor = createAuthor; 
module.exports.createPublisher = createPublisher;
module.exports.createBook = createBook;
module.exports.listBooks = listBooks;
module.exports.putCover = putCover; 
module.exports.increasePrice = increasePrice;