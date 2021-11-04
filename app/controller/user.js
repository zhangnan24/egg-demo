"use strict";

const Controller = require("egg").Controller;

/**
 * 在类里面定义实例化方法，UserController类被实例化后里面的方法才能使用
 */
class UserController extends Controller {
  /**
   * queryString方式，获取到的参数会被处理成json对象，很方便
   */
  async queryParamsDemo() {
    const { ctx } = this;
    ctx.body = ctx.query;
  }

  /**
   * 动态路径方式，参数同样会被处理成json对象
   */
  async dynamicRouteDemo() {
    const { ctx } = this;

    ctx.body = ctx.params;
  }
}

module.exports = UserController;
