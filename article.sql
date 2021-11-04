create database egg_article;

use egg_article;

-- 入参内容每条依次是表头名、类型、默认是不是空，以及注释，最后一条定义谁是主键
-- 尾部engine表示用哪种引擎，以及自增步进幅度，表注释
create table article(
  id int(10) NOT NULL auto_increment,
  img text DEFAULT NULL comment "base64图片",
  title VARCHAR(80) DEFAULT NULL comment "标题",
  summary VARCHAR(300) DEFAULT NULL comment "概要",
  content TEXT DEFAULT NULL comment "内容",
  updateTime timestamp DEFAULT NULL comment "最近更新时间",
  primary key (id)
) engine = InnoDB AUTO_INCREMENT = 1 comment "文章表";

-- 向表里面插入内容，指定哪些表头，以及具体内容，顺序要一一对应
-- 插入数据不用写主键，mysql会自动生成，有不明白的可以看阮一峰教程
insert into
  article(img, title, summary, content)
values
  (
    'https://i0.hdslb.com/bfs/face/9773ed6ae8efcdbd89225b9f6de8416fbbdd1e7a.jpg@160w_160h_1c_1s.webp',
    '小小酥',
    '小小酥简介',
    '小小酥内容，说实话一般般'
  );