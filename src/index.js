const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://cluster0.otjog5i.mongodb.net/?retryWrites=true&w=majority", {
    dbName: 'myDataBase3',
    user:'ibrahimDatabase1',
    pass: '8Nh3Y1Pj0ck4ubUC',
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
// write /inbetween here? for new folder
