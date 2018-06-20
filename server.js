const express = require("express"); //Route and app handler
const bodyParser = require("body-parser"); //Parse requested data from body
const mongoose = require("mongoose"); // Connect to MongoDB database
const morgan = require("morgan");
const bcrypt = require("bcrypt"); //Hash and Salt passwords
const session = require("express-session"); //Handle logged in sessions
const assert = require("assert");

// Start mongoDB "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"

//Connect to mongodb
mongoose.connect("mongodb://localhost/vermis");

//Make express app
const app = express();

//Use Morgan to log HTTP transfers
app.use(morgan("dev"));

//Use bodyparser to get POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Show static folder
app.use(express.static("./public"));

// Include dashboard.js
const dashboardRoutes = require("./routes/dashboard.js");
dashboardRoutes(app);

//Include Login.js
const loginRoutes = require("./routes/login.js")
loginRoutes(app);




app.listen(3000);
console.log("Now listening to port 3000");
