import { Timeline, Space, Input, Button, Card, Col, Row } from 'antd';
import { AudioOutlined, SearchOutlined, RedoOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ReactJosn from 'react-json-view';
import { post } from '../../utils/request';
import requests from '../../utils/requests';




const { Search } = Input;
// const [value, setValue] = useState('')

// const [data, setDate] = useState([{ "name": "车辆进入换电站", "header": { "platformKey": "z7NZaeGS8eGg467scJ", "eventKey": "carEnterPowerStation", "version": "1.0.0", "timestamp": " 1681996003450" }, "time": "2023-04-20 21:06:43.531", "body": { "batteryNo": "001PBAPJ000001C8G2200033", "carNo": "\\346\\270\\235AA32605", "orderId": "20230420210641YUAA32605", "soe": " 19.9", "vin": "LLV2AVB2XN0000239", "useableSoc": " 41.7" } }])
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => {
  requests.post({
    url: 'localhost:8077/log/process/exchange',
    data: {
      "omsStationOrderId": "20230420210641YUAA32605",
      "startTime": "2023-04-20 21:00:00",
      "endTime": "2023-04-20 21:10:00"
  }
  }).then(res =>{
    console.log(res)
  })
}
const MyTimeAxis = (props) => (
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
    <Row gutter={16} style={{ marginTop: '25px' }} >
      <Col span={6}>
        <Card
          style={{
            width: 300,
            height: "auto",
          }}
        >
          <Timeline style={{ marginTop: '25px' }}
            items={[ {},{} ]}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{
            width: 300,
            height: "auto",
          }}
        >
          <ReactJosn src={{ "name": "zhangsan", "ssdfdh": [{ "shangsh": "12341" }] }} theme="summerfruit:inverted" Collapsed="false" iconStyle="spqare" indentWidth={4} />
        </Card>
      </Col>
    </Row>


  </>

);
export default MyTimeAxis;