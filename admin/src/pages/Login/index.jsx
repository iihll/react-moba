import React, { Component } from 'react'
import { Card, Form, Input, Button, Space, message } from 'antd'
import './index.less'
import request from '@/utils/request'

export default class Login extends Component {
  onFinish = async values => {
    const res = await request.post('/login', values)
    if (res) {
      sessionStorage.token = res.token
      message.success('登录成功')
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <Card title="请先登录" className="login-card">
        <Form labelCol={{ span: 4 }} onFinish={this.onFinish}>
          <Form.Item label="用户名" name="username">
            <Input></Input>
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password autoComplete="true"></Input.Password>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Button htmlType="reset">重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}
