const app = require('express')();
const debug = require('debug')('sso:app');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const router = require('./sso/router');
const middleware = require('./sso/middleware');
const config = require('./sso/env');

middleware(app);
router(app)
app.listen(config.port, debug(`Server started on http://${config.hosts}:${config.port}`));

// 多线程
// if (cluster.isMaster) {
//   debug(`Master ${process.pid} is running`);
//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
//   cluster.on('listening', (worker, address) => {
//     debug(`worker ${worker.process.pid}, listen: http://${config.hosts}:${config.port}`);
//   });
//   cluster.on('exit', (worker, code, signal) => {
//     debug(`worker ${worker.process.pid} died`);
//     cluster.fork();
//   });
// } else {
//   app.listen(config.port, debug(`Server started on http://${config.hosts}:${config.port}`));
// }