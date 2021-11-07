'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async getUserInfo(userID) {
    // 这里后面要改成从数据查（通过orm)
    const { app } = this;
    console.log(app);
    const res = await `SELECT * FROM users WHERE userID = ${userID}`;
    return res;
  }
}

module.exports = UserService;
