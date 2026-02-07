import { Card, Row, Col } from 'antd';
import Basice from './demo/basic';
import BasiceHidden from './demo/basic.hidden';
import BasiceWatch from './demo/basic.watch';

const App = () => {
  return (
    <Row gutter={12}>
      <Col span={6}>
        <Card title="基础表单">
          <Basice />
        </Card>
      </Col>
      <Col span={6}>
        <Card title="基础表单-隐藏项">
          <BasiceHidden />
        </Card>
      </Col>
      <Col span={6}>
        <Card title="基础表单-监听数据渲染">
          <BasiceWatch />
        </Card>
      </Col>
      <Col span={6}></Col>
    </Row>
  );
};

export default App;
