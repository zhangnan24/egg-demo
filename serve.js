'use strict';

// 给PM2开守护进程用的

const egg = require('egg');

const workers = Number(process.argv[2] || require('os').cpus().length);

egg.startCluster({
  workers,
  baseDir: __dirname,
});
