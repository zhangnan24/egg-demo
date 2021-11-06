create database egg_article;

use egg_article;

-- 入参内容每条依次是表头名、类型、默认是不是空，以及注释，最后一条定义谁是主键
-- 尾部engine表示用哪种引擎，以及自增步进幅度，表注释
create table article(
  id INT NOT NULL auto_increment,
  authod_id INT NOT NULL,
  title VARCHAR(80) DEFAULT NULL comment "标题",
  summary VARCHAR(300) DEFAULT NULL comment "概要",
  content TEXT DEFAULT NULL comment "内容",
  updateTime DATETIME DEFAULT null comment "最近更新时间",
  primary key (id)
) engine = InnoDB AUTO_INCREMENT = 1 comment "文章表";

create table author(
  id INT NOT NULL auto_increment,
  authod_name VARCHAR(80) NOT NULL,
  primary key (id)
) engine = InnoDB AUTO_INCREMENT = 1 comment "作者表";

-- 向author表插入一条数据
insert into
  author(authod_name)
values
  ('作者1号');

-- 向表里面插入内容，指定哪些表头，以及具体内容，顺序要一一对应
-- 插入数据不用写主键，mysql会自动生成，有不明白的可以看阮一峰教程
insert into
  article(authod_id, title, summary, content)
values
  (
    3,
    '小小酥',
    '小小酥简介',
    '小小酥内容，说实话一般般'
  );

insert into
  article(authod_id, title, summary, content)
values
  (4, '小小酥', '卧槽', '什么贵啊');

-- 给article表的title字段添加索引
ALTER TABLE
  article
ADD
  INDEX idx_title (title);