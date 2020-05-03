var express=require("express");
var movieController = require('./controller/movieController');
var mysql = require('mysql');
var app = express();

app.use("/public",express.static("public"));

app.set("view engine","ejs");

require('dotenv').config()

var con = mysql.createConnection({
    host: process.env.DBHOST ,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DB
  });

  con.connect(function(err) {
  	console.log(process.env.DB + '\n' + process.env.DBPASS +'\n' + process.env.DBHOST +'\n' + process.env.DBUSER);
    if (err) throw err;
    console.log('Connected to the database');

  });


movieController(app,con);

const port = process.env.PORT || 8880
var server=app.listen(port,function(){

	console.log("server listening to " + port);
});
