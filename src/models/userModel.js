const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : String,
    "lastName" : String,
    mobile : {
        type: String,
        required: true,
        unique: true,
    },
    emaild: String,
    gender: {
        type: String,
        enum: ["male","female","LGBTQ"]
    },
    parentsName : {
        motherName: String,
        fathersName: String,
    },
    isIndian : Boolean
},{timestamps: true})

module.exports = mongoose.model('User', userSchema)