const express = require("express");
const appProxy = express();
const request = require('request')
const config = require('./convict.js');

appProxy.get("/", (req, res) => {
    request(`http://${config.get('ip')}:${config.get('port_api')}`, (err, response, body)=>{
      if (err) return res.status(500).send({ message: err })
      return res.send(body)
    })
});

appProxy.get("/user", (request, response) => {
    response.send({name: config.get('name'), age: config.get('age')});
});

appProxy.listen(config.get('port_proxy'));
