/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 const mysqli = require('mysqli');

    var connection;

    module.exports = {

    dbConnection: function (dbObj) {

        connection = mysqli.createConnection({
            host: dbObj.host,
            user: dbObj.user,
            password: dbObj.password,
            database: dbObj.database
        });
        connection.connect();
        return connection;
    }

    };