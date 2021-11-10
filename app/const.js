'use strict';

// 操作数据catch时需要返回给前端的，不报数据库返回的错误
const dbErrorBody = {
  data: null,
  msg: 'db error',
  code: 500,
};

// 查询成功返回给前端的code定义
const successCode = 200;

module.exports = {
  dbErrorBody,
  successCode,
};
