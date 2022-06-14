const { count } = require("console");
const orderModel = require("../models/orderModel.js");
const productModel = require('../models/productModel.js');
const userModel = require('../models/userModel.js');

//Q1. Write a POST api to create a product from the product details in request body.
const createProduct = async function(req, res){
    const data = req.body;
    const createIt = await productModel.create(data);
    res.send({msg: createIt})
}

//Q2. Write a POST api to create a user that takes user details from the request body. If inside the header, isFreeAppUser is not present terminate the request response cycle with an error message that the request is missing a mandatory header
const createUser = async function(req, res){
    const bodyData = req.body;
    const reqHeaderData = req.headers.isfreeappuser;      // const reqHeaderData = req.headers.isfreeappuser; // const totalData = {...bodyData, ...reqHeaderData}
    const createIt = await userModel.create(bodyData);
    const updateValue = await userModel.findOneAndUpdate(
        {bodyData}, 
        {$set:{isFreeAppUser : reqHeaderData}},
        {new:true}
    )
    res.send({msg: updateValue})
}



// Q.3 
// orderSchema > refer user and product collection using its id
// if(!reqHeaderData){res.send("request is missing mandatory header")}....else{next()} ....MW1
//if(userId){if(userId presents in userColln){if(productId){if(product)}}}....next() ...MW2
//if(reqHeaderData === true){do not deduct user's balance, update amount of order's ===0, isFreeAppUser in order ===reqData}
//if(reHeaderData === false){products: store product price, users: deduct balance by $inc = -Productprice, orders : amount=Productprice and isFreeAppUser === reqHeaderData}

const createOrder = async function(req, res){
    const data = req.body
    
    reqHeaderData = req.headers.isfreeappuser;    //data type of true is string here
    data.isFreeAppUser = reqHeaderData;
    const pId = req.body.productId;
    const product = await productModel.findById(pId);
    const productPrice = product.price

    const uId = req.body.userId;
    const user = await userModel.findById(uId);
    const userBalance = user.balance;

    if(userBalance >= productPrice){
        if(reqHeaderData == "true"){
            data.amount = 0; 
            const createOrder = await orderModel.create(data);
            res.send({orderDeatils: createOrder});
        }
        if(reqHeaderData == "false"){
            const userBalance = await userModel.findOneAndUpdate(
                {_id : uId},
                {$inc : {balance : -productPrice}},
                {new: true});
    
            data.amount = productPrice;
            const createOrder = await orderModel.create(data)
            res.send({orderDeatils: createOrder});
        }
    }else{
        return res.send("you don't sufficient balance to purchase this product")
    }


}





module.exports.createProduct = createProduct;
module.exports.createUser = createUser;
module.exports.createOrder = createOrder;