"use strict";
const dbConnectionManager = require('./db');
let request = require('request');
let dbconnection;

const config = require('config').get('app');

/**
 * ActivateLicense
 * 
 * @desc Activate license call secure-plam api to activate license.
 * @trigger Triggered when activate api got called.
 * 
 */

var apiHeaders = {
    'auth_key': 'bf92aeac80c4d4e95669062f695250be', 'request_type': 'decrypt',
    'Content-Type': 'application/json'
};

var apiOptions = function (clientAuthToken) {
    var option = {
        url: configObj.DB_API_URL,
        method: 'POST',
        headers: dbHeaders,
        json: { client_auth_token: clientAuthToken }
    };
    return option;
};

// exports.ActivateLicense = function (requestData, res) {
//     // Call secure plam api for Activate.
//     res.json(responseObj(200, requestData, 'Activated'));
//     request(reqOptions, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
            
//         }
//     });

// };
exports.ActivateLicense = function(req, res){
    // Receive request from provider and call provider controller as per request.
    
    let row = [{'id':1, 'menu_name':'Family','parent_id':0},
        {'id':2, 'menu_name':'Nikita','parent_id':1},
        {'id':3, 'menu_name':'Member','parent_id':0},
        {'id':4, 'menu_name':'Rohit','parent_id':3},
        {'id':5, 'menu_name':'Nikita1','parent_id':4}
    ];
    res.json(responseObj(200, row, 'Agent Login Success'));

    // Create log id here 
    // var logdata = {client:'test-client', log_type:'Activation',ip_address:'192.168.1.172', log_details:row, status_code:0, request_type:'Activation', request_status:'Open'};
    // logController.WriteLog(logdata, 0).then(function(result) {
    //     let logid = result;
        
    //     console.log('Insert Log id - '+logid);
    // });
    console.log('Activate license -');    
}

exports.DeactivateLicense = function (requestData, res) {
    // Call secure plam api for Deactivate.
};

var responseObj = function (code, data, message) {
    var resp = {'code': code, 'data': data, 'message': message};
    return resp;
};