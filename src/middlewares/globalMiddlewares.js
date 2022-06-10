const moment = require('moment')

const myFirstMW= function(req, res, next) {
    const dateTime = moment().format("DD-MM-YYYY hh:mm:ss")
    const ip = req.ip;
    const route = req.path;
    console.log(dateTime, ip, route);
    next();
}


module.exports.myFirstMW =myFirstMW;



console.log(moment())