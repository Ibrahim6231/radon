const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true,
        require: true
    },
    authorName:{
        type: String,
        required: true,
    },
    category: String,
    publishedYear: Number,
    rating:Number
},{timestamps: true});


module.exports = mongoose.model("Book", bookSchema)