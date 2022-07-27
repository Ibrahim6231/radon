const express = require('express');
const router = express.Router();
const userController=require("../controllers/userController")
const authMw= require("../middleware/auth")


//APIS for user
router.post("/register", userController.createUser);
router.post("/login", userController.userLogin);
router.get("/user/:userId/profile",authMw.authentication,userController.getUserDetail)





//--------------------------------------------------------------------------
router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "The api you request is not available"
    })
})



module.exports=router;