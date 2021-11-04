/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1636001091089_161';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    // 放过所有 content-type 为 `application/json` 的请求，开发环境先这样配着，后面看下怎么改
    csrf: {
      ignoreJSON: true
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
