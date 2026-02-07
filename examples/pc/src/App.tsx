import { Space, Card } from 'antd';
import Basice from './demo/basic';
import BasiceHidden from './demo/basic.hidden';

const App = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Card title="基础表单">
        <Basice />
      </Card>
      <Card title="基础表单-隐藏项">
        <BasiceHidden />
      </Card>
    </Space>
  );
};

export default App;
