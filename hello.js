const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleLayer = jsonServer.defaults();
const port = process.env.PORT || 3000;
server.use(middleLayer);
server.use(router);
server.listen(port);