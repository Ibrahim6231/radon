const express = require('express');
const externalModule = require('../logger/logger.js')  //or ("../logger/logger")
const externalModuleUtil = require("../util/helper.js")
const externalModuleValidator = require("../validator/formatter.js")
const router = express.Router();

router.get('/test-me-problem1', function (req, res) {
    externalModule.myFunPublicName();
    res.send('My first ever api!')
});

router.get('/test-me-problem2', function (req, res) {
    externalModuleUtil.todaysDate();
    externalModuleUtil.month(); 
    externalModuleUtil.myBatch();
    res.send('My second ever api!')
});

router.get('/test-me-problem3', function (req, res) {
    externalModuleValidator.myTrim();
    externalModuleValidator.myLowerCase();
    externalModuleValidator.myUpperCase();
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason