import { View } from '@tarojs/components';
import { Button, Input } from '@nutui/nutui-react-taro';
import { FairysTaroValtioForm } from '@fairys/taro-valtio-form-basic';
interface State {
  username?: string;
  username2?: string;
  username3?: string;
  username4?: string;
}

function Basic() {
  const form = FairysTaroValtioForm.useForm<State>();

  const onSubmit = async () => {
    try {
      const values = await form.validate();
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <FairysTaroValtioForm<State>
        form={form}
        rules={{
          username: [{ required: true, message: '请输入用户名' }],
        }}
      >
        <FairysTaroValtioForm.FormItem name="username" label="用户名">
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <FairysTaroValtioForm.FormItem
          rules={[{ required: true, message: '请输入用户名2' }]}
          name="username2"
          label="用户名2"
        >
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <FairysTaroValtioForm.FormItem
          rules={[{ required: true, message: '请输入用户名3' }]}
          name="username3"
          label="用户名3"
        >
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <FairysTaroValtioForm.FormItem
          rules={[{ required: true, message: '请输入用户名4' }]}
          name="username4"
          label="用户名4"
        >
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <Button onClick={onSubmit}>提交</Button>
      </FairysTaroValtioForm>
    </View>
  );
}
export default Basic;
