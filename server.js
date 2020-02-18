const express = require("express");
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const session = requrie('express-session');



//may need to adjust
app.use(express.static("familyapp" + "public/dist/public"));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'chocolatecheetah',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}))
// app.use(express.static(path.join()))


app.set('view engine', 'ejs');
app.set('views', 'familyapp'+ '/views');

//--------------------------routes-------------------

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

//-------------------running on localhost-----------------
app.listen(8000, () => console.log("listening on port 8000"));