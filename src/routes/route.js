const express = require('express');
const router = express.Router();


const playersArray =[
                        {
                            "name": "manish",
                            "dob": "1/1/1995",
                            "gender": "male",
                            "city": "jalandhar",
                            "sports": [ "swimming"]
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
    
router.post("/players", function(req, res){
    let Profile = req.body.player;
    playersArray.push(Profile);
    res.send({"players":playersArray})
    // res.send("post working")
})


module.exports = router;