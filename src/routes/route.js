const express = require('express');
const router = express.Router();


const arrPlayers = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": ["swimming"]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": ["soccer"]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": ["soccer"]
    },
]

router.post("/players", function (req, res) {
    let Profile = req.body;
    for(let i=0; i<arrPlayers.length; i++){
        if(arrPlayers[i]["name"] === Profile.name){
            return res.send("This name already exists, players details cannot be saved");
        }
    }
    arrPlayers.push(Profile);
    res.send({ "msg": arrPlayers })
})


module.exports = router;