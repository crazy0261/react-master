import React, { useState } from 'react'
import { Button, Modal, Form, Input, Switch ,message} from 'antd';

function ClassType() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    // 提交验证表单
    form.validateFields().then((values) => {
      console.log(values)
      // 关闭弹窗
      setIsModalOpen(false)
      // 清空表单弹窗数据
      form.resetFields("")
    }).catch((error) => {
      
    })


  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        新增弹窗，form嵌套switch
      </Button>
      <Modal title="表单信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: '用户名不能为空!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '密码不能为空!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="是否开启"
            name="enble"
            // 设置默认值，string 写啥传啥，{}可设置布尔值
            initialValue = {false}
          >
            <Switch defaultChecked   onChange={onChange} />
          </Form.Item>

        </Form>

      </Modal>
    </>
  )
}

export default ClassType