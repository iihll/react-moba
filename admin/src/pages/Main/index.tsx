import React, { useState } from 'react'
import type { ProSettings } from '@ant-design/pro-components'
import {
  PageContainer,
  ProCard,
  ProLayout,
} from '@ant-design/pro-components'
import {
  LogoutOutlined,
} from '@ant-design/icons'
import {
  Dropdown,
} from 'antd'
import { Outlet, history, useLocation } from 'umi'
import defaultProps from './_defaultProps'

export default function Main() {
  const [settings] = useState<Partial<ProSettings> | undefined>({
    layout: 'side',
  })
  const location = useLocation()

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        siderWidth={216}
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...defaultProps}
        location={location}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              history.push(item.path!)
            }}
          >
            {dom}
          </div>
        )}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '用户',
          render: (props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      label: '退出登录',
                    },
                  ],
                  onClick: ({ key }) => {
                    if (key === 'logout') {
                      localStorage.removeItem('token')
                      history.push('/login')
                    }
                  },
                }}
              >
                {dom}
              </Dropdown>
            )
          },
        }}
        {...settings}
      >
        <PageContainer>
          <ProCard>
            <Outlet />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  )
}
