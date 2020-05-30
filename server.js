var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs")

var PORT = process.env.PORT || 8300;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  