import { Timeline, Space, Input, Button } from 'antd';
import { AudioOutlined, SearchOutlined, RedoOutlined } from '@ant-design/icons';
import { useState } from 'react';


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
        <Button type="primary"  style={{marginLeft:"10%"}} icon={<SearchOutlined />} onClick={(s)=>setValue(e.target.value)}>
          查询
        </Button>
        <Button style={{marginLeft:"10%"}} icon={<RedoOutlined onClick={()=>console.log("请求成功清楚内容")}/>}>
          重置
        </Button>
      </Space>
    </Space>
    <Timeline style={{marginTop:'25px'}}
      items={[
        {
          children: 'Create a services site 2015-09-01',
        },
        {
          children: 'Solve initial network problems 2015-09-01',
        },
        {
          children: 'Technical testing 2015-09-01',
        },
        {
          children: 'Network problems being solved 2015-09-01',
        },
      ]}
    />
  </>

);
export default MyTimeAxis;