/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require("express");
var app = express();
var session = require('express-session');
var http = require('http').Server(app);
const fs = require('fs');
//var options = {
//  key: fs.readFileSync('/etc/ssl/certs/nginx/secret.key'),
//  cert: fs.readFileSync('/etc/ssl/certs/nginx/staging.test.com.chained.crt')
//};

var bodyParser = require('body-parser');
var uniqid = require('uniqid');  // Import uniqid lib

// Get configuration 
const config = require('config').get('app');

var portNo = config.port;
var host = config.host;

app.use(session({
    secret: 'cybus',
    resave: true,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, auth_key, *");
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
     // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(express.static('public'));
app.use(express.static('public/view'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Get route path from config
var routePath = config.routePath;

// All api request send to route path
var routes = require('./api/v1/stack/routes/routes.js');
routes(app);

//
http.listen(portNo, host, function () {
    console.log('Connected with '+config.port+'...');
});

app.get('/', function(req, res) {
    res.sendFile('../public/index.html');
});

app.get('/setting', function(req, res) {
    res.sendFile('../public/view/setting.html');
});