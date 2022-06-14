// // Q.3 
// // orderSchema > refer user and product collection using its id
// // if(!reqHeaderData){res.send("request is missing mandatory header")}....else{next()} ....MW1
// //if(userId){if(userId presents in userColln){if(productId){if(product)}}}....next() ...MW2
// //if(reqHeaderData === true){do not deduct user's balance, update amount of order's ===0, isFreeAppUser in order ===reqData}
// //if(reHeaderData === false){products: store product price, users: deduct balance by $inc = -Productprice, orders : amount=Productprice and isFreeAppUser === reqHeaderData}

// const makeOrder = async function(req, res){
//     const data = req.body
    
//     reqHeaderData = req.headers.isfreeappuser;    //data type of true is string here

//     const pId = req.body.productId;
//     const product = await productModel.findById(pId);
//     const productPrice = product.price

//     const uId = req.body.userId;
//     const user = await userModel.findById(uId);
//     const userBalance = user.balance;

//     if(userBalance >= productPrice){
//         const createOrder = await orderModel.create(data)
//     }else{
//         return res.send("you don't sufficient balance to purchase this product")
//     }

//     if(reqHeaderData == "true"){
//         const updateOrder = await orderModel.findOneAndUpdate(
//             {data},
//             {$set : {amount :0 ,  isFreeAppUser: reqHeaderData}},
//             {new:true});
//         res.send({msg: updateOrder});
//     }
//     if(reqHeaderData == "false"){
//         const userBalance = await userModel.findOneAndUpdate(
//             {_id : uId},
//             {$inc : {balance : -productPrice}},
//             {new: true});

//         const updateOrder = await orderModel.findOneAndUpdate(
//             {data},
//             {$set: {amount: productPrice, isFreeAppUser: reqHeaderData}},
//             {new: true})
//         res.send({msg: updateOrder});
//     }
// }


// const test = async function(req, res){
//     const bodyData = req.body;
//     console.log(req.body)
//     const headersData = req.headers;
//     console.log(req.headers);

//     const a = JSON.stringify(req.headers);
//     const {b, c} = a;
//     console.log(b)
//     console.log(req.headers.boys)
//     console.log(req.headers.isFreeAppUser)//small case is mandatory
//     console.log(req.headers.isfreeappuser)
//     console.log(a)
//     const headerKey = req.headers.isFreeAppUser;
//     res.send(bodyData, headersData, headerKey);
// }
// router.post('/test', test);