const express = require("express");
const appProxy = express();
const request = require('request')
const config = require('./convict.js');
const router = require('./routing.js')

appProxy.listen(config.get('port_proxy'));

appProxy.use('/', router);
