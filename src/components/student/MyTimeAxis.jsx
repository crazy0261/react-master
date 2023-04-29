import { Timeline, Input, Card, Col, Row,Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ReactJosn from 'react-json-view';




const { Search } = Input;

const onOk = (value)=>{
  console.log(value)
}




const MyTimeAxis = (props) => (
  <>
    <Row gutter={16}  >
      <Space>
        <Col span={7}>
          <Card
            style={{
              width:380,
              height: "auto",
            }}
          >
            <Timeline 
            style={{ marginTop: '10px' }}
              items={
                props.nameArr
              }
            />
          </Card>
        </Col>
        <Col span={7}>
          <Card
            style={{
              width: "500%",
              height: 500,
            }}
          >
            <ReactJosn src={props.dataArr} name={false}  theme="summerfruit:inverted" displayDataTypes="false" collapsed="true" iconStyle="triangle" indentWidth={4} style={{ WebkitBoxOrient: "vertical" }} />
          </Card>
        </Col>
      </Space>
    </Row>


  </>

);
export default MyTimeAxis;