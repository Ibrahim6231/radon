const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const {default : mongoose} = require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//to connect with mongoDB
mongoose.connect("mongodb+srv://ibrahimDatabase1:8Nh3Y1Pj0ck4ubUC@cluster0.otjog5i.mongodb.net/ibrahimDatabse1?retryWrites=true&w=majority",{
    useNewUrlParser : true
})
.then(()=> console.log("MongoDB is connected"))
.catch(err => console.log(err)) 

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

