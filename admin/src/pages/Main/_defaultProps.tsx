import React from 'react'
import {
  CrownFilled,
  SmileFilled,
  TabletFilled,
  SettingFilled
} from '@ant-design/icons'

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: <SmileFilled />,
        component: './Welcome',
      },
      {
        path: '/content',
        name: '内容管理',
        icon: <CrownFilled />,
        routes: [
          {
            path: '/categories/list',
            name: '分类列表',
          },
          {
            path: '/items/list',
            name: '物品列表',
          },
          {
            path: '/heroes/list',
            name: '英雄列表',
          },
        ],
      },
      {
        path: '/yunying',
        name: '运营管理',
        icon: <TabletFilled />,
        routes: [
          {
            path: '/articles/list',
            name: '文章列表',
          },
          {
            path: '/ads/list',
            name: '广告位列表',
          },
        ],
      },
      {
        path: '/system',
        name: '系统设置',
        icon: <SettingFilled />,
        routes: [
          {
            path: '/admin_users/list',
            name: '管理员列表',
          },
        ],
      },
    ],
  },
}
