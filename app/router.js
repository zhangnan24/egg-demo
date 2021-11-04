"use strict";

/**
 * @param {Egg.Application} app - egg application
 * 这就是egg.js的特色之一：不用显式引用，约定大于配置，controller会直接找到controller目录下
 * 文件名要小写，里面的类要大写
 */
module.exports = (app) => {
  const { router, controller } = app;

  router.get("/", controller.home.index);

  // 这里的myID会被处理成ctx.params中的键名
  router.get("/dynamicRouteDemo/:myID", controller.user.dynamicRouteDemo);

  router.get("/queryParamsDemo", controller.user.queryParamsDemo);

  router.post("/postRequestDemo", controller.user.postRequestDemo);

  router.get("/userInfo/:id", controller.user.getUserInfo);
};
