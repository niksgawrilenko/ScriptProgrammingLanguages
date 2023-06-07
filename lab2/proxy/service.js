const request = require('request')
const config = require('./convict.js');

module.exports.defaultPage = (req, res) => {
  request(`http://${config.get('ip')}:${config.get('port_api')}`, (err, response, body)=>{
    if (err) return res.status(500).send({ message: err })
    return res.send(body)
  })
};

module.exports.userPage = (request, response) => {
  response.send({name: config.get('name'), age: config.get('age')});
};
