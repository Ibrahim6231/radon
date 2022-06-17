const axios = require('axios')

const getMemes = async function(req, res){
    try {
        let options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        const result = await axios(options);
        console.log(result);
        res.status(200).send({status: true, msg: result.data})
    } catch (err) {
        res.status(500).send({status:false, error: err.message})
    }

}

const makeMemes = async function(req, res){
    try {

        const id = req.query.template_id;
        const text0 = req.query.text0;
        const text1 = req.query.text1;
        const username = req.query.username;
        const pass = req.query.password;
        if(!id || !text0 || !text1 || !username|| !pass){return res.status(400).send({status:false, error: "all 5 queries are mandatory"})}

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${pass}`
        }
        const result = await axios(options);
        console.log(result);
        res.status(200).send({status: true, msg: result.data})
    } catch (err) {
        res.status(500).send({status:false, error: err.message})
    }

}


module.exports.getMemes = getMemes;
module.exports.makeMemes = makeMemes;