import { Card, Row, Col } from '@nutui/nutui-react-taro';
import Basic from './demo/basice';
import Hidden from './demo/basice.hidden';
import Watch from './demo/basice.watch';

function Index() {
  return (
    <Row gutter={20}>
      <Col span={24}>
        <Card title="基础表单">
          <Basic />
        </Card>
      </Col>
      <Col span={24}>
        <Card title="隐藏表单">
          <Hidden />
        </Card>
      </Col>
      <Col span={24}>
        <Card title="监听表单">
          <Watch />
        </Card>
      </Col>
    </Row>
  );
}
export default Index;
