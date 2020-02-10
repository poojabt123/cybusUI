/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 const mysql = require('mysql');

var connection;

module.exports = {

    dbConnection: function (dbObj) {        
        connection = mysql.createConnection({
            host: dbObj.host,
            user: dbObj.user,
            password: dbObj.password,
            database: dbObj.database,
            port:dbObj.port
            
        });
        return connection;
    },
    dbConnectionPool: function (dbObj) {
        connection = mysql.createPool({
            host: dbObj.host,
            user: dbObj.user,
            password: dbObj.password,
            database: dbObj.database,
            port:dbObj.port,
            connectionLimit: 400            
        });
        return connection;
    }   

};