const express = require('express');
// const myHelper = require('../util/helper')
// const underscore = require('underscore')

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

router.get('/sol1', function(req, res){
    let arr = [1,2,3,5,6,7]  //find the misssing number
    let n = arr[arr.length -1];
    let sumArray = arr.reduce((acc,curr)=>{
        acc = acc + curr;
        return acc;
    },0);
    let missingNumber = (n*(n+1)/2) - sumArray
    console.log(missingNumber)
    res.send("The missingNumber from this array "+ arr + " is " + missingNumber)
})

router.get('/sol2', function(req, res){
    let arr = [33,34,35,37,38]  //find the misssing number
    let a = arr[0] - 1; let l = arr[arr.length -1];
    let sumArray = arr.reduce((acc,curr)=>{
        acc = acc + curr;
        return acc;
    },0);
    let missingNumber = (l*(l+1)/2) - (a*(a+1)/2 )- sumArray
    console.log(missingNumber)
    res.send("The missingNumber from this array "+ arr + " is " + missingNumber)
})



module.exports = router;
// adding this comment for no reason