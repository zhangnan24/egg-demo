'use strict';

const { Controller } = require('egg');

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

  /**
   * post请求读取前端的requestBody的内容，content-typea为application/json
   */
  async postRequestDemo() {
    const { ctx } = this;
    ctx.body = {
      contentFormClient: ctx.request.body,
      msg: 'post request demo',
    };
  }

  /**
   * 获取用户信息
   */
  async getUserInfo() {
    const { ctx } = this;
    // 在/app/service下面的类中定义的方法，最后都会挂载到ctx实例上来，所以这里可以这样调用
    const res = await ctx.service.user.getUserInfo(ctx.params.id);
    ctx.body = {
      data: res,
      msg: 'successfuly get',
      code: 200,
    };
  }
}

module.exports = UserController;
