"use strict";

const dbConnectionManager = require('./db');
let dbconnection;
exports.WriteLog = function(data, logid){
    return new Promise(function(resolve, reject){
        let insQry = "INSERT INTO `log_data` "
        +"(`client`,"
        +"`log_type`,"
        +"`ip_address`,"
        +"`log_date`,"
        +"`log_details`,"
        +"`ref_log_id`,"
        +"`status_code`,"
        +"`request_type`,"
        +"`request_status`)"
        +"VALUES (?,?,?,Now(),?,?,?,?,?)";
                
        var obj = {'host':'localhost','user':'roe','password':'Roe@3782','database':'logdata','port':'3306'};
        dbconnection = dbConnectionManager.dbConnection(obj);
        dbconnection.connect((err) => {
            if(!err){
                // Insert into log_data table.
                let insertFileds = [data.client, data.log_type, data.ip_address, data.log_details, logid, data.status_code, data.request_type, data.request_status];
                dbconnection.query(insQry, insertFileds, function (err, insertResult) {
                    if (!err) {
                        return resolve(insertResult.insertId);
                    } else {
                        return resolve(0);
                        console.log('ERROR_ - ' + err.message);
                    }
                });
            } else {
                console.log('Unable to connect Log DB - '+err.message);
            }
        });
    });
}