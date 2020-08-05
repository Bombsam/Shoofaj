//jshint esversion:6
const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("index.html", function(req, res) {
  res.redirect("/");
});
