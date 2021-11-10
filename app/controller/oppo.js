'use strict';

const { Controller } = require('egg');
const { dbErrorBody, successCode } = require('../const');

class OppoController extends Controller {
  async queryPhoneList() {
    const { ctx } = this;
    try {
      const res = await ctx.service.oppo.find(ctx.query);
      ctx.body = {
        code: successCode,
        data: res,
        msg: 'success',
      };
    } catch (err) {
      ctx.body = dbErrorBody;
    }
  }
}

module.exports = OppoController;
