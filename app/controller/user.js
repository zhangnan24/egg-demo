'use strict';

const { Controller } = require('egg');
const { dbErrorBody, successCode } = require('../const');

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
      code: successCode,
    };
  }

  /**
   * 获取用户信息
   */
  async getUserInfo() {
    const { ctx } = this;
    try {
      const res = await ctx.service.user.getUserInfo(ctx.params.id);
      ctx.body = {
        data: res,
        msg: 'successfuly get',
        code: successCode,
      };
    } catch (err) {
      ctx.body = dbErrorBody;
    }
  }
}

module.exports = UserController;
