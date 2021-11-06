'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // 当使用egg-mysql这个插件时，会在全局app应用中注册一个mysql变量
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
};
