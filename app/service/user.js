'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async getUserInfo(userID) {
    const { app } = this;
    const res = await app.mysql.query('user', { id: userID });
    return res;
  }
}

module.exports = UserService;
