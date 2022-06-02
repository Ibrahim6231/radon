const express = require('express');
const lodash = require('lodash');

const router = express.Router();

router.get('/movies', function (req, res) {
    const arrMovies = ["3Idiots","Dhamaal","Jurassic Park", "Avengers", "Captain Marvel", "Thor Ragnarok"];
    console.log(arrMovies)
    res.send('listing out movies!')
});

router.get('/movies/:indexNumber', function (req, res) {
    const arrMovies = ["3Idiots","Dhamaal","Jurassic Park", "Avengers", "Captain Marvel", "Thor Ragnarok"];
    if(req.params.indexNumber >= arrMovies.length){
        console.log("error: use a valid index")
        res.send('error: use a valid index!')
    }else{
        console.log(arrMovies[req.params.indexNumber])
        res.send('listing out movies!')
    }
    
});










router.get('/Hello', function (req, res) {

    //chunk
    const months = ["January", "February","March","April","May","June","July","August","September","October","November","December"]
    const chunks = lodash.chunk(months, 3);
    console.log(chunks)

    //tail
    const arrOdd = []
    for(let i=0; i<10; i++){
    arrOdd[i] = 2*i+1;
    }
    const tails = lodash.tail(arrOdd)
    console.log(tails)

    //union
    const   arr1=[1,2,3,4],
            arr2=[3,4,5,6],
            arr3=[5,6,7],
            arr4=[6,7],
            arr5 =[6,7,8,9,10];
    const unions = lodash.union(arr1,arr2,arr3,arr4,arr5);
    console.log(unions);

    //fromPair
    const pairs = [["horror","The shining"],["drama","Titanic"],["thriller","Shutter"],["fantasy","Pans Labyrinth"]]
    const ObjectPairs = lodash.fromPairs(pairs);
    console.log(ObjectPairs);
    
    res.send('My hello api!, My chunk, tail, union and form pairs assignment executed')
} )

module.exports = router;
// adding this comment for no reason