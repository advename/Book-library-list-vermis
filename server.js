const express = require("express"); //Route and app handler
const bodyParser = require("body-parser"); //Parse requested data from body
const mongoose = require("mongoose"); // Connect to MongoDB database
const morgan = require("morgan"); // Log HTTP transfers
const bcrypt = require("bcrypt"); //Hash and Salt passwords
const session = require("express-session"); //Handle logged in sessions
const assert = require("assert");// Used for mocha testing
const MongoStore = require("connect-mongo")(session); //Used to store sessions in Mongo db
const helmet = require("helmet"); //Security plugin
const key = require("./config/keys.js"); //Store and import all keys from here

// Start mongoDB "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"

//Connect to mongodb
mongoose.connect("mongodb://localhost/vermis");
let db = mongoose.connection;

//Make express app
const app = express();

//Helmet is a security package
app.use(helmet());

//Use Morgan to log HTTP transfers
app.use(morgan("dev"));

//Use bodyparser to get POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//Add session settings
app.use(session({
  secret: key.session,
  name: "sessionId", //Use non-standard cookie names, this is similar to hiding X-Powered-By
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: db})
}))

//Include Login.js
const loginRoutes = require("./routes/login.js")
loginRoutes(app);

// Include dashboard.js
const dashboardRoutes = require("./routes/dashboard.js");
dashboardRoutes(app);

//Show static folder
app.use(express.static("./public"));

//Create server
app.listen(3000);
console.log("Now listening to port 3000");
