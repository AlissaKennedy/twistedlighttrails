const phpServer = require('node-php-server')

phpServer.createServer({
  port: 8000,
  hostname: 'localhost',
  base: 'source',
  keepalive: false,
  open: false,
  bin: 'php',
  router: `${__dirname}/server.php`,
})
