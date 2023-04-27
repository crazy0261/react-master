import React from 'react'
import { Col, Row ,Card,Button,Form,Input, message} from 'antd';
import logo from '../../assets/logo.png'
import {useNavigate} from 'react-router-dom'

function LogOut() {
  const navigate= useNavigate();
  return (
    <Row>
      <Col
        md={{
          span:6,
          push:8
        }}
        xs={{
          span:22,
          push:1
        }}
      >
        <img src={logo} style={{
          width:'300px',
          display:'block',
          borderRadius:'15px',
          margin:'40px auto'
        }} />

        <Card title="成长管理系统" headStyle={{textAlign:'center'}}  >
            <Form labelCol={{
              md: {
                span:6
              }
            }} 
            onFinish={(n) =>{
              console.log(n)
              if(n.userName === "admin" && n.password === "123456"){
                message.success("登录成功")
                navigate("/admin/student_menu/student_type")
              }else{
                message.error("请检查用户名或密码！")
              }
              

            }}
            >

              <Form.Item label='用户名' name='userName' rules={[
                {
                  required:true,
                  message:'请输入用户名',
                }
              ]}>
                <Input placeholder='请输入用户名' /> 
              </Form.Item>
              <Form.Item label='密码' name='password'  rules={[
                {
                  required:true,
                  message:'请输入密码',
                }
              ]}>
                <Input.Password placeholder='请输入密码' /> 
              </Form.Item>
              <Form.Item >
                <Button htmlType='submit' type='primary' style={{
                  margin: '0 auto',
                  display: 'block'
                }}
                >登录</Button> 
              </Form.Item>
              <span style={{color:"#D3D3D3"}}>账号：admin,密码：123456</span>
            </Form>
          </Card> 
      </Col>
    </Row>
  )
}

export default LogOut