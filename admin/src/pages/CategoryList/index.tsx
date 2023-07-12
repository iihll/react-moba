import React, { useRef, useState } from 'react'
import type { ActionType, ProColumns } from '@ant-design/pro-components'
import {
  ProTable,
} from '@ant-design/pro-components'
import { Button } from 'antd'
import Dialog from './components/dialog'
import type { ListItem } from './types'
import http from '@/utils/http'

export default function CategoryList() {
  const actionRef = useRef<ActionType>()
  const [isAdd, setIsAdd] = useState(false)
  const [id, setId] = useState('')
  const [modelVisit, setModelVisit] = useState(false)
  const onAdd = () => {
    setIsAdd(true)
    setModelVisit(true)
  }
  const onEdit = (id: string) => {
    setId(id)
    setIsAdd(false)
    setModelVisit(true)
  }
  const columns: ProColumns<ListItem>[] = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
      copyable: true,
    },
    {
      title: '上级分类',
      dataIndex: ['parent', 'name'],
    },
    {
      title: '分类',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => {
        return [
          <Button type="link" key="edit" onClick={() => onEdit(record._id)}>
            编辑
          </Button>,
        ]
      },
    },
  ]

  return (
    <>
      <ProTable<ListItem>
        headerTitle="分类列表"
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async () => {
          const res = await http.get<ListItem[]>('rest/categories')
          return {
            data: res.data,
            success: true,
          }
        }}
        rowKey="_id"
        search={false}
        options={false}
        pagination={false}
        toolBarRender={() => {
          return [<Button key="create" type="primary" onClick={onAdd}>新建</Button>]
        }}
      />
      <Dialog id={id} isAdd={isAdd} modelVisit={modelVisit} closeDialog={() => { setModelVisit(false) }} />
    </>
  )
}
