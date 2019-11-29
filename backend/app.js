var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');
const config = require('./config/database.config');

// on se connecte à la base de données
mongoose.connect(config.url, { useNewUrlParser: true });
const app = express();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var measuresRouter = require("./routes/measures");
var sensorsRouter = require("./routes/sensors");


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/measures", measuresRouter);
app.use("/sensors", sensorsRouter);


module.exports = app;
