import { FairysPCValtioForm } from '@fairys/pc-valtio-form-basic';
import { Button, Input } from 'antd';
interface State {
  username?: string;
  username2?: string;
}
const Basice = () => {
  const form = FairysPCValtioForm.useForm<State>();

  const onSubmit = async () => {
    try {
      const values = await form.validate();
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FairysPCValtioForm<State>
        form={form}
        rules={{
          username: [{ required: true, message: '请输入用户名' }],
        }}
      >
        <FairysPCValtioForm.FormItem label="用户名" name="username">
          <Input placeholder="请输入" />
        </FairysPCValtioForm.FormItem>
        <FairysPCValtioForm.FormItem
          label="用户名2"
          name="username2"
          rules={[{ required: true, message: '请输入用户名2' }]}
        >
          <Input placeholder="请输入" />
        </FairysPCValtioForm.FormItem>
      </FairysPCValtioForm>
      <Button onClick={onSubmit}>提交</Button>
    </div>
  );
};

export default Basice;
