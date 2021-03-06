// Dependencies
var express = require('express');
var bodyParser = require("body-parser");
// Set handlebars
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 8080;
require("dotenv").config();

var app = express();
// Serve static content for the app from the "public" directory
app.use(express.static("public"));

// Parse application body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
app.get('/', (req, res) => {
    res.send(process.env.SECRET_KEY);
})
// Start our server so that it can begin listening to client requests
app.listen(PORT, function() {
    // Log server-side when our server has started
    console.log("Server listening on: https://localhost: " + PORT);
});


