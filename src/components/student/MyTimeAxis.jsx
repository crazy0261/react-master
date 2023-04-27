import { Timeline, Space, Input, Button, Card, Col, Row } from 'antd';
import { AudioOutlined, SearchOutlined, RedoOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ReactJosn from 'react-json-view';




const { Search } = Input;
// const [value,setValue] = useState('')



const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => {
  console.log(value);

}
const MyTimeAxis = () => (
  <>
    <span>站端订单号：</span><Input style={{ width: "25%" }} placeholder="请输入站端订单号" />
    <Space direction="vertical">
      <Space wrap>
        {/* 报错味修改 */}
        {/* <Button type="primary" value={value} style={{marginLeft:"10%"}} icon={<SearchOutlined />} onClick={(s)=>setValue(e.target.value)}> */}
        <Button type="primary" style={{ marginLeft: "10%" }} icon={<SearchOutlined />} onClick={onSearch}>
          查询
        </Button>
        <Button style={{ marginLeft: "10%" }} icon={<RedoOutlined onClick={() => console.log("请求成功清楚内容")} />}>
          重置
        </Button>
      </Space>
    </Space>
    <Row gutter={16} style={{marginTop:'25px'}} >
      <Col  span={6}>
        <Card
          style={{
            width: 300,
            height: "auto",
          }}
        >
          <Timeline style={{ marginTop: '25px' }}
            items={[
              {
                children: '事件一',
              },
              {
                children: '事件二',
              },
              {
                children: '事件三',
              },
              {
                children: '事件四',
              },
            ]}
          />
        </Card>
      </Col>
      <Col    span={8}>
        <Card
          style={{
            width: 300,
            height: "auto",
          }}
        >
          <ReactJosn src={{"name":"zhangsan","ssdfdh":[{"shangsh":"12341"}]}} theme="summerfruit:inverted" Collapsed="false" iconStyle="spqare" indentWidth={4}/>
        </Card>
      </Col>
    </Row>


  </>

);
export default MyTimeAxis;