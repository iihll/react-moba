import React, { useRef, useState } from 'react'
import type { ActionType, ProColumns } from '@ant-design/pro-components'
import {
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components'
import { Button, Form, message } from 'antd'
import http from '@/utils/http'

interface ListItem {
  _id: string
  parent?: {
    name: string
  }
  name: string
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
    render: (text, record, _, action) => [
      <Button type="link" key="edit">
        编辑
      </Button>,
    ],
  },
]

export default function CategoryList() {
  const actionRef = useRef<ActionType>()
  const [isAdd, setIsAdd] = useState(false)
  const [form] = Form.useForm<{ name: string; company: string }>()

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
      toolBarRender={(action) => {
        return [<Button key="create" type="primary">新建</Button>]
      }}
    />
    <ModalForm<{
      name: string
      company: string
    }>
      title={isAdd ? '新建' : '编辑'}
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        console.log(values.name)
        message.success('提交成功')
        return true
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />

        <ProFormText
          width="md"
          name="company"
          label="我方公司名称"
          placeholder="请输入名称"
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          width="md"
          name="contract"
          label="合同名称"
          placeholder="请输入名称"
        />
        <ProFormDateRangePicker name="contractTime" label="合同生效时间" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          request={async () => [
            {
              value: 'chapter',
              label: '盖章后生效',
            },
          ]}
          width="xs"
          name="useMode"
          label="合同约定生效方式"
        />
        <ProFormSelect
          width="xs"
          options={[
            {
              value: 'time',
              label: '履行完终止',
            },
          ]}
          name="unusedMode"
          label="合同约定失效效方式"
        />
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="主合同编号" />
      <ProFormText
        name="project"
        disabled
        label="项目名称"
        initialValue="xxxx项目"
      />
      <ProFormText
        width="xs"
        name="mangerName"
        disabled
        label="商务经理"
        initialValue="启途"
      />
    </ModalForm>
    </>
  )
}
