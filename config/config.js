/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//module.exports = {
//  configData: function () {
//      return 'roe';
//      var host = '192.168.2.217';
//      //var host = '169.38.90.26';
//      var port = 4545;
//      //var routePath = '/var/www/html/public_html/nodejs/adura/api/v1/chat/routes/routes';
//      var routePath = '/opt/node/adura/adura/api/v1/chat/routes/routes';
//   var obj = {host:host, port:port, routePath:routePath};
//   return obj;
//  }
//};
exports.port = function(){
    return 4545;
};
exports.routePath = function(){
    return '/opt/node/aduracopy/adura/api/v1/chat/routes/routes';
};
exports.host = function(){
    return '192.168.2.217';
};
//exports.configData = function () {
//
//      var host = '192.168.2.217';
//      //var host = '169.38.90.26';
//      var port = 4545;
//      //var routePath = '/var/www/html/public_html/nodejs/adura/api/v1/chat/routes/routes';
//      var routePath = '/opt/node/adura/adura/api/v1/chat/routes/routes';
//    var obj = {host:host, port:port, routePath:routePath};
//   return obj;
//
//};
