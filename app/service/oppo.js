'use strict';

const { Service } = require('egg');

class OppoService extends Service {
  async find(query) {
    const { app } = this;
    const { page_no, page_size, ...rest } = query;

    const queryParams = {
      where: rest,
      limit: page_size ? Number(page_size) : undefined,
      offset: page_no && page_size ? (page_no - 1) * page_size : 0,
    };

    const list = await app.mysql.select('oppo_phones', queryParams);
    // 手写query取得的结果为RowDataPacket，需要基于RowDataPacket取出结果
    const sum = await app.mysql.query('SELECT COUNT(*) total FROM oppo_phones');
    return { list, total: sum[0].total };
  }
}

module.exports = OppoService;
