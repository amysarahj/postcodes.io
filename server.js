var express = require("express"),
		app = express(),
		http = require("http"),
		fs = require("fs"),
		path = require("path");

var env = process.env.NODE_ENV || "development",
		config = require(path.join(__dirname, "config/config"))(env);

// Load DB connection
require(path.join(__dirname, "config/db"))(config);

// Start logging
require(path.join(__dirname, "/config/logger"))(config);

// Load in middleware
require(path.join(__dirname, "/config/express"))(app, config);

// Load in Routes
require(path.join(__dirname, "/config/routes"))(app);

var port = config.port || 8000;
app.listen(port);
console.log("Postcode API listening on port", port);

exports = module.exports = app;