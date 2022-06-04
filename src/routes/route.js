const express = require('express');
const router = express.Router();
// const userModel = require("../models/userModel.js");
const userController = require("../controller/userController.js");

// router.post("/createUser", async function(req, res){
//     let data = req.body;
//     let savedData = await userModel.create(data);
//     res.send({msg: savedData})
// })
router.post("/createUser", userController.createUser)

router.get("/getUsersData", userController.getUsersData)
// router.get("/getUsersData", async function(req, res){
//     let allUsers = await userModel.find();
//     res.send({msg: allUsers})
// })
module.exports = router;