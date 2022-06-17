const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController");
const weatherController= require("../controllers/weatherController.js");
const memesController= require("../controllers/memesController.js");




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", cowinController.getStates)
router.get("/cowin/districtsInState/:stateId", cowinController.getDistricts)
router.get("/cowin/getByPin", cowinController.getByPin)

router.post("/cowin/getOtp", cowinController.getOtp)

//Q.1 WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get('/cowin/getByDistrictId', cowinController.getByDistrictId); //Q.1

router.get('/openweathermap/getWeather', weatherController.getWeather); //Q.2.a
router.get('/openweathermap/getTemperature', weatherController.getTemperature); //Q.2.b
router.get('/openweathermap/getTempInAscending', weatherController.getTempInAscending); //Q.2.c

router.get('/imgflip/getMemes', memesController.getMemes);  //3.a
router.post('/imgflip/makeMemes', memesController.makeMemes);//3.b



module.exports = router;