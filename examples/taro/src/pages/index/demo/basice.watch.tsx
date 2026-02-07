import { View } from '@tarojs/components';
import { Button, Input } from '@nutui/nutui-react-taro';
import { FairysTaroValtioForm } from '@fairys/taro-valtio-form-basic';
interface State {
  username?: string;
}

const Cusotm = () => {
  const [formState] = FairysTaroValtioForm.useFormState<State>();
  return <View>{formState.username}</View>;
};

function Basic() {
  const form = FairysTaroValtioForm.useForm();

  const onSubmit = async () => {
    try {
      const values = await form.validate();
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  const formState = FairysTaroValtioForm.useFormInstanceToState(form);

  return (
    <View style={{ padding: 20 }}>
      <View>用户名：{formState.username}</View>
      <FairysTaroValtioForm
        form={form}
        rules={{
          username: [{ required: true, message: '请输入用户名' }],
        }}
      >
        <FairysTaroValtioForm.FormItem name="username" label="用户名">
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <FairysTaroValtioForm.FormItem label="监听数据渲染">
          <Cusotm />
        </FairysTaroValtioForm.FormItem>

        <Button onClick={onSubmit}>提交</Button>
      </FairysTaroValtioForm>
    </View>
  );
}
export default Basic;
