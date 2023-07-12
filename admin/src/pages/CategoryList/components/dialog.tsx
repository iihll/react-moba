import React, { useEffect } from 'react'
import {
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components'
import { Form, message } from 'antd'
import type { ListItem } from '../types'
import http from '@/utils/http'

interface Props {
  id: string
  isAdd: boolean
  modelVisit: boolean
  closeDialog: () => void
}

function Dialog({ id, isAdd, modelVisit, closeDialog }: Props) {
  const [form] = Form.useForm<ListItem>()
  useEffect(() => {
    // 编辑状态下获取详情
    if (!isAdd && id) {
      http.get<ListItem>(`rest/categories/${id}`).then((res) => {
        console.log('res', res)
      })
    }
  }, [id, isAdd])

  return (
    <ModalForm<ListItem>
      title={isAdd ? '新建' : '编辑'}
      form={form}
      autoFocusFirstInput
      modalProps={{
        destroyOnClose: true,
        onCancel: () => closeDialog(),
      }}
      open={modelVisit}
      onFinish={async (values) => {
        console.log(values.name)
        message.success('提交成功')
        closeDialog()
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
  )
}

export default Dialog
