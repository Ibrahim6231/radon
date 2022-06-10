const UserModel= require("../models/userModel")



const fun1 = function(req, res){
    res.send({msg: "this response is from handler which is fun1"})
}

const fun2 = function(req, res){
    res.send({msg: "this response is from handler which is fun2"})
}

const fun3 = function(req, res){
    res.send({msg: "this response is from handler which is fun2"})
}



module.exports.fun1 = fun1;
module.exports.fun2 = fun2;
module.exports.fun3 = fun3;





// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
//     }



















// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode