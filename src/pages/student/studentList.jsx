import React, { useState, useEffect } from 'react'
import MyTimeAxis from '../../components/student/MyTimeAxis'
import { Space, Input, Button, Card, message } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Search } = Input;






function StudentList() {
  const [dataArr, setdataArr] = useState([]);
  const [nameArr, setnameArr] = useState([]);
  


  const fetchData = () => {
    axios({
      method: 'POST',
      url: '/log/process/exchange',
      baseURL: 'http://localhost:5173/api',
      headers: { "content-type": "application/json" },
      data: {
        "omsStationOrderId": "20230510190425YUADY1263",
        "startTime": "2023-05-10 19:00:50",
        "endTime": "2023-05-10 19:10:50"
      }
    }).then((res) => {
      setdataArr(res.data)
      getName(res.data)
    }).catch((e)=>{
      message.error("未知错误")
    })
  }
  const getName = (value) => {
    let nameArrList = [];
    value.forEach(v => {
      nameArrList.push(
        {
          children: `${v.name}(${v.time})`,

        })
    }
    )
    setnameArr(nameArrList)
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
        bordered={false}
      >
        <Space direction="horizontal" >
          <span>站端订单号：</span>
          <Input style={{ width: "160%" }} placeholder="请输入站端订单号" />
          <Space wrap>
            {/* 报错味修改 */}
            {/* <Button type="primary" value={value} style={{marginLeft:"10%"}} icon={<SearchOutlined />} onClick={(s)=>setValue(e.target.value)}> */}
            <Button type="primary" style={{ marginLeft: "140%" }} icon={<SearchOutlined />} onClick={onSearch}>
              查询
            </Button>
            <Button style={{ marginLeft: "140%" }} icon={<RedoOutlined />} onClick={() => {setdataArr([]);setnameArr([])}} >
              重置
            </Button>
          </Space>
        </Space>
      </Card>


      <MyTimeAxis dataArr={dataArr} nameArr={nameArr}/>


    </div>
  )
}

export default StudentList