import React, { useRef } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import http from '@/utils/http'

interface ListItem {
  _id: string
  title: string
}

const columns: ProColumns<ListItem>[] = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    copyable: true,
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"

      >
        编辑
      </a>,
      <a target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
    ],
  },
]

export default function CategoryList() {
  const actionRef = useRef<ActionType>()
  return (
    <ProTable<ListItem>
      headerTitle="分类列表"
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async () => {
        const res = await http.get<ListItem[]>('rest/articles')
        return {
          data: res.data,
          success: true,
        }
      }}
      rowKey="_id"
      search={false}
      options={false}
      pagination={false}
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload()
          }}
          type="primary"
        >
          新建
        </Button>,
      ]}
    />
  )
}
