const express = require("express");
const bodyParser = require('body-parser');
const helmet = require('helmet');
require("dotenv").config();
const {user} = require('./routes/user');


let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());

app.use("/user",user);

app.listen(port, () => {
    console.log(`App is running at localhost:${port}`);
})

