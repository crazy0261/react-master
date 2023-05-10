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
        <Col span={7}>
          <Card
            style={{
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
              width: "600px",
              maxHeight: "550px",
              overflow:'auto'
            }}
          >
            <ReactJosn  src={props.dataArr} name={false}  theme="summerfruit:inverted" displayDataTypes="false" collapsed="true" iconStyle="triangle" indentWidth={4} style={{ WebkitBoxOrient: "vertical"}} />
          </Card>
        </Col>
    </Row>


  </>

);
export default MyTimeAxis;