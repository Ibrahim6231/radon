// const getTempInAscending = async function (req, res) {
//     try {
//         const city = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
//         const appid = req.query.appid
//         if (!city || !appid) { return res.status(200).send({ status: false, msg: "please enter city in the q and appid " }) };
//         const arrResult = [];
//         for(i=0; i<city.length; i++){
//             let options = {
//                 method: "get",
//                 url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${appid}`
//             }
//             const result = await axios(options);
//             // console.log(result);
//             const data = result.data;
//             const temp = data.main.temp;
//             let obj = {};
//             obj.city = city[i]; obj.temperature = temp;
//             arrResult.push(obj)
//         }
//         const arrSort = arrResult.sort((x,y) => x.temperature - y.temperature)
        
//         res.status(200).send({ status: true, city: arrResult })
        
//     } catch (error) {
//         res.status(500).send({ status: false, msg: error.message })
//     }