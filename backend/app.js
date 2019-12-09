var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require('mongoose');
const config = require('./config/database.config');
let cors = require('cors');

/*// on se connecte à la base de données
mongoose.connect(config.url, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
*/
mongoose.Promise = global.Promise;
mongoose.connect(config.url, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
)


const app = express();
//ajout sarah
app.use(cors());
//
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const userRouter = require('./routes/user');
var measuresRouter = require("./routes/measures");
const measureRouter = require('./routes/measure');
var sensorsRouter = require("./routes/sensors");
var sensorRouter = require("./routes/sensor");



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use('/user', userRouter);
app.use("/users", usersRouter);
app.use("/measure", measureRouter);
app.use("/measures", measuresRouter);
app.use("/sensor", sensorRouter);
app.use("/sensors", sensorsRouter);


module.exports = app;
