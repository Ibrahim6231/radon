const axios = require('axios')


//Q.2 get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)

const getWeather = async function (req, res) {
    try {
        const city = req.query.q
        const appid = req.query.appid
        if (!city || !appid) { return res.status(200).send({ status: false, msg: "please enter city in the q and appid " }) };

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        const result = await axios(options);
        console.log(result);
        res.status(200).send({ status: true, msg: result.data })
        
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }

}

//Q.2.b then change the above to get the temperature only( of London)
const getTemperature = async function (req, res) {
    try {
        const city = req.query.q
        const appid = req.query.appid
        if (!city || !appid) { return res.status(200).send({ status: false, msg: "please enter city in the q and appid " }) };

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        const result = await axios(options);
        console.log(result);
        const temp = result.data.main.temp;
        res.status(200).send({ status: true, city: `temp of ${city} is ${temp} Kelvin` })
        
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }

}

//Q.2c. - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
// result should look something like this
// [{city:"London", temp: 280},{city:"Moscow", temp: 290},{city:"Bangalore", temp: 301.2},.......]

const getTempInAscending = async function (req, res) {
    try {
        const city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        const appid = req.query.appid
        if (!city || !appid) { return res.status(200).send({ status: false, msg: "please enter city in the q and appid " }) };
        const arrResult = [];
        for (let i = 0; i < city.length; i++) {
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${appid}`
            }
            const result = await axios(options);                    // console.log(result);
            const temp = result.data.main.temp;
            let obj = {city: city[i], temperature: temp};
            arrResult.push(obj)
        }
        const arrSort = arrResult.sort((x, y) => x.temperature - y.temperature)
        res.status(200).send({ status: true, city: arrResult })     //arrSort and arrResult memory location is same

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}
module.exports.getWeather = getWeather;
module.exports.getTemperature = getTemperature;
module.exports.getTempInAscending = getTempInAscending;