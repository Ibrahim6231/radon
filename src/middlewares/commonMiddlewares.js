const orderModel = require("../models/orderModel");
const userModel = require('../models/userModel.js');
const productModel = require('../models/productModel.js');

const checkHeaders = async function(req, res, next){
    const reqHeaderData = req.headers.isfreeappuser;
    if(reqHeaderData){
        next();
        // res.send({msg: reqHeaderData})
    }else{
        res.send("ERROR: The request is missing a mandatory header");
    }

}

//MW2
const checkId = async function(req, res, next){
    const uId = req.body.userId;
    const user = await userModel.findById(uId);
    const pId = req.body.productId
    const product = await productModel.findById(pId);
  

    if(uId){
        if(user){
            if(pId){
                if(product){
                    console.log("user and product id's verified")
                    next();

                }else(res.send("error: this product is not availables in our stores"))
            }else{res.send("error: must enter a product ID")}
        }else{res.send("error: this user is not available in our users collection")}
    }else{res.send("error: must enter a user ID")}

}

module.exports.checkHeaders =checkHeaders;
module.exports.checkId = checkId;