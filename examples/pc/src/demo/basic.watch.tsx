import { FairysPCValtioForm } from '@fairys/pc-valtio-form-basic';
import { Button, Input } from 'antd';

interface State {
  username?: string;
}

const Cusotm = () => {
  const [formState] = FairysPCValtioForm.useFormState<State>();
  return <span>{formState.username}</span>;
};

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
          <Input placeholder="请输入用户名" />
        </FairysPCValtioForm.FormItem>
        <FairysPCValtioForm.FormHideItem label="监听数据渲染">
          <Cusotm />
        </FairysPCValtioForm.FormHideItem>
      </FairysPCValtioForm>
      <Button onClick={onSubmit}>提交</Button>
    </div>
  );
};

export default Basice;
