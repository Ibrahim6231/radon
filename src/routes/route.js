const express = require('express');
const lodash = require('lodash');

const router = express.Router();

//Q.1
router.get('/movies', function (req, res) {
    const arrMovies = ["3Idiots","Dhamaal","Jurassic Park", "Avengers", "Captain Marvel", "Thor Ragnarok"];
    console.log(arrMovies)
    res.send('hi, my 1st api - listing out movies!')
});


//Q.2 and Q.3
router.get('/movies/:indexNumber', function (req, res) {
    const arrMovies = ["3Idiots","Dhamaal","Jurassic Park", "Avengers", "Captain Marvel", "Thor Ragnarok"];

    if(req.params.indexNumber >= arrMovies.length){
        console.log("error: use a valid index")
        res.send('error: use a valid index!')
    }else{
        console.log(arrMovies[req.params.indexNumber])
        res.send('hi, my 3rd api - listing out movies with index number!')
    }
    
});

//Q.4
router.get('/films', function (req, res) {
    const arrMovies2 = [{
                        "id":1,
                        "name": "The Shining",
                        },{
                        "id":2,
                        "name": "Incendies",
                        },{
                        "id":3,
                        "name": "Rand de Basanti",
                        },{
                        "id":4,
                        "name": "Finding Nemo",
                        }];
    
        console.log(arrMovies2)
        res.send('hi, my 4th api, listing out movies with Id and name!')
    
});

//Q.5
router.get('/films/:filmId', function (req, res) {
    const arrMovies2 = [{
                        "id":1,
                        "name": "The Shining",
                        },{
                        "id":2,
                        "name": "Incendies",
                        },{
                        "id":3,
                        "name": "Rang de Basanti",
                        },{
                        "id":4,
                        "name": "Finding Nemo",
                        }];
    // let id= req.params.(filmId+1);  doubt? not able to perform arithmetic operation with req.params Ans : because filmId is a string
    const showMovie = arrMovies2.find((x)=> x.id == req.params.filmId)
    if(showMovie ===  undefined){
        console.log("error: no movies with this ID, use a valid Id number")
        res.send('error: use a valid id number!')
    }else{
        console.log(showMovie)
        res.send('hi, my 5th api, listing out movies at corresponding id!')
    }
    
});


// Ladosh assignment


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
    
    res.send('My hello api for ladosh assignment!, My chunk, tail, union and form pairs assignment executed')
} )

module.exports = router;
// adding this comment for no reason