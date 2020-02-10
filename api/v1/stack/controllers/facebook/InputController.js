// Client name - Etisalat Input controller.
"use strict";

const appController = require('../AppController');
const logController = require('../LogController');
let request = require('request');
let dbconnection;

const fs = require('fs');
const config = require('config').get('app');

/**
 * ActivateLicense
 * 
 * @desc Activate license call secure-plam api to activate license.
 * @trigger Triggered when activate api got called.
 * 
 */
exports.ActivateLicense = function(req, res){
    // Receive request from provider and call provider controller as per request.
    let row = 'test-data';
    // Create log id here 
    var logdata = {client:'test-client', log_type:'Activation',ip_address:'192.168.1.172', log_details:row, status_code:0, request_type:'Activation', request_status:'Open'};
    logController.WriteLog(logdata, 0).then(function(result) {
        let logid = result;
        
        console.log('Insert Log id - '+logid);
    });
    console.log('Activate license -');    
}

function transformation(req, res){
    // var data = {'loginId': 0, 'loginDetails': 0, 'logid':0};
    // req.on('data', function (data) {
               
    //     var result1 = convert.xml2json(data, {compact: true, spaces: 4});
    //     // var result2 = convert.xml2json(data, {compact: false, spaces: 4});
    //     var row = JSON.parse(result1);
    //     console.log('MSISDN - '+ row.call_ur.msisdn);
    //     console.log(result1);

    //     if( parser.validate(data) === true) { //optional (it'll return an object in case it's not valid)
    //         var jsonObj = parser.parse(data, xmloptions);
    //         console.log('Data Fetch-', jsonObj);    
    //     }else{
    //         console.log('Not validate');
    //     }
        
    //     // res.json(row);
    // });
    var row = JSON.stringify(data);
    var logdata = {client:'Timwe', log_type:'Activation',ip_address:'192.168.1.172', log_details:row, status_code:0, request_type:'Activation', request_status:'Open'};
    logController.WriteLog(logdata, 0).then(function(result){
        let logid = result;
        console.log('Insert Log id - '+logid);
        data.logid = logid; // Pass logid to ActiveLicense
        appController.ActivateLicense(data, res);
        
    });
}

