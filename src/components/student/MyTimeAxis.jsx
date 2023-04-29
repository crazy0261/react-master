import { Timeline, Input, Card, Col, Row } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ReactJosn from 'react-json-view';




const { Search } = Input;


const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


const MyTimeAxis = (props) => (
  <>
    <Row gutter={16} style={{ marginTop: '25px' }} >
      <Col span={6}>
        <Card
          style={{
            width: 300,
            height: "auto",
          }}
        >
          <Timeline style={{ marginTop: '25px' }}
            items={[{},{}]}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card
          style={{
            width: "230%",
            height: "auto",
          }}
        >
          <ReactJosn src={props} theme="summerfruit:inverted" Collapsed="false" iconStyle="spqare" indentWidth={4}  />
        </Card>
      </Col>
    </Row>


  </>

);
export default MyTimeAxis;