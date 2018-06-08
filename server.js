// var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var reservations = [];
var waitingList = [];


var app = express();
var PORT = process.env.PORT || 8080;



app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/bookings", function(req, res) {
    return res.json([reservations, waitingList]);
  });
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function Reservation(name, phone, email, UniqueID) {
    name: name;
    phoneNumber: phone;
    email: email;
    id: UniqueID
}

app.post("/bookings", function (req, res) {
    var booking = req.body;

    if (reservations.length < 5) {
        reservations.push(booking);
    } else {
        waitingList.push(booking);
    }


});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

