import React, { useState } from 'react'
import MyTimeAxis from '../../components/student/MyTimeAxis'
import { Space, Input, Button, Card } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import axios from 'axios';


const { Search } = Input;






function StudentList() {
  const [dataArr,setdataArr] = useState([]);


  const fetchData = () => {
    axios({
      method: 'POST',
      url: '/log/process/exchange',
      baseURL: 'http://localhost:5173/api',
      headers: { "content-type": "application/json" },
      data: {
        "omsStationOrderId": "20230420210641YUAA32605",
        "startTime": "2023-04-20 21:00:00",
        "endTime": "2023-04-20 21:10:00"
      }
    }).then((res) => {
      setdataArr(res.data)
      console.log(dataArr)
    })
  }


  const onSearch = (value) => {
    fetchData()
  }

  return (
    <div>
      <Card
        style={{
          width: "50%",
        }}
        bordered ={false}
      >
        <Space direction="horizontal">
          <span>站端订单号：</span>
          <Input style={{ width: "160%" }} placeholder="请输入站端订单号" />
          <Space wrap>
            {/* 报错味修改 */}
            {/* <Button type="primary" value={value} style={{marginLeft:"10%"}} icon={<SearchOutlined />} onClick={(s)=>setValue(e.target.value)}> */}
            <Button type="primary" style={{ marginLeft: "140%" }} icon={<SearchOutlined />} onClick={onSearch}>
              查询
            </Button>
            <Button style={{ marginLeft: "140%" }} icon={<RedoOutlined onClick={() => console.log("请求成功清楚内容")} />}>
              重置
            </Button>
          </Space>
        </Space>
      </Card>


      <MyTimeAxis dataArr={dataArr}/>


    </div>
  )
}

export default StudentList