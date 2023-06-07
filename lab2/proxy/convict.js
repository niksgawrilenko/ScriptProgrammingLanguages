const convict = require('convict');

convict.addFormat(require('convict-format-with-validator').ipaddress);

const config = convict({
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port_api: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT_API',
    arg: 'port_api'
  },
  port_proxy: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3001,
    env: 'PORT_PROXY',
    arg: 'port_proxy'
  },
  name: {
    doc: 'Author`s name',
    default: 'Nikita'
  },
  age: {
    doc: 'Author`s age',
    default: 20
  }
});

module.exports = config;