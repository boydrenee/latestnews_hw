//  Variables and dependencies
var express = require("express");

var mongoose = require("mongoose");

var exphbs = require("express-handlebars");

var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({ 
  defaultLayout: "main" 
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the database and tell the status of the connection
mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log("connection to mongoose successful");
  }
});

// Tell our app to listen
app.listen(PORT, function() {
   console.log("Listening on port: " + PORT);  //Tell us where it is listening
});
