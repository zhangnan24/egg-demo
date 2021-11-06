'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // 这就算开始从mysql查数据了，泪目（直接查article整张表的数据）
    const res = await app.mysql.select('article');
    ctx.body = res;
  }
}

module.exports = HomeController;
