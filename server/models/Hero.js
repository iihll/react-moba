const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  title: { type: String },
  // 背景图
  banner: { type: String },
  // 字段变复数 类型变数组 表示关联多个分类
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: {
    // 难度
    difficult: { type: Number },
    // 技能
    skills: { type: Number },
    // 攻击
    attack: { type: Number },
    // 生存
    survive: { type: Number }
  },
  // 技能
  skills: [
    {
      icon: { type: String },
      name: { type: String },
      description: { type: String },
      delay: { type: String },
      cost: { type: String }
      // tips: { type: String }
    }
  ],
  // 顺风装备字段
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  // 逆风装备字段
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  // 使用技巧
  usageTips: { type: String },
  // 对抗技巧
  battleTips: { type: String },
  // 团战思路
  teamTips: { type: String },

  // 英雄关系
  // 最佳搭档
  partners: [
    {
      hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
      description: { type: String }
    }
  ]
})

// 第三个参数为集合名
module.exports = mongoose.model('Hero', schema, 'heroes')
