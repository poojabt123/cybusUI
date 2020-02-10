/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//'use strict';
const LogController = require('../controllers/LogController');
const routeIndex = function (app) {
    
    // init Facebook controller --------
    var FacebookController = require('../controllers/AppController');
    
    // Call Facebook Controller -----------
    app.route('/API/menu').get(FacebookController.ActivateLicense);
};

module.exports = routeIndex;
