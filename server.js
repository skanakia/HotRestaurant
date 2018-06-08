var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs")

var reservations = [];
var waitingList = [];


var app = express();
var PORT = process.env.PORT || 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/home":
            return renderHomePage(req, res);
        case "/tables":
            return renderTablesPage(req, res);
        case "/reserve":
            return renderReservationPage(req, res);
        default:
            return renderHomePage(req, res);
    }
}

function renderHomePage() {
    fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
}

function renderReservationPage(req, res) {
    fs.readFile(__dirname + "/reservation.html", function (err, data) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
}

function renderTablesPage(req, res) {
    fs.readFile(__dirname + "/tables.html", function (err, data) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
}





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function Reservation(name, phone, email, UniqueID) {
    name: name;
    phoneNumber: phone;
    email: email;
    id: UniqueID
}

app.post("/api/characters", function (req, res) {
    var newcharacter = new Reservation(req.body);


});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

