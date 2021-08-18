import React, { Component } from 'react'
import { Layout, Button, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  StockOutlined,
  FileSearchOutlined
} from '@ant-design/icons'
import './index.less'

const { Content, Header, Sider } = Layout
const { SubMenu } = Menu

export default class Home extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  handleLogout = () => {
    // TODO 退出其他逻辑
    this.props.history.push('/login')
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu key="1" title="内容管理" icon={<FileSearchOutlined />}>
              <Menu.ItemGroup title="分类">
                <Menu.Item index="/categories/create">新建分类</Menu.Item>
                <Menu.Item index="/categories/list">分类列表</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="物品">
                <Menu.Item index="/items/create">新建物品</Menu.Item>
                <Menu.Item index="/items/list">物品列表</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="英雄">
                <Menu.Item index="/heroes/create">新建英雄</Menu.Item>
                <Menu.Item index="/heroes/list">英雄列表</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="2" title="运营管理" icon={<StockOutlined />}>
              <Menu.ItemGroup title="文章">
                <Menu.Item index="/articles/create">新建文章</Menu.Item>
                <Menu.Item index="/articles/list">文章列表</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="广告位">
                <Menu.Item index="/ads/create">新建广告位</Menu.Item>
                <Menu.Item index="/ads/list">广告位列表</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="3" title="系统设置" icon={<SettingOutlined />}>
              <Menu.ItemGroup title="管理员">
                <Menu.Item index="/admin_users/create">新建管理员</Menu.Item>
                <Menu.Item index="/admin_users/list">管理员列表</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-header" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle
            })}
            <Button type="link" onClick={this.handleLogout}>
              退出
            </Button>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}
