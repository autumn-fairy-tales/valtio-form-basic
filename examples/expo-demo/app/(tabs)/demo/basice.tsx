import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { FairysRNValtioForm } from '@fairys/rn-valtio-form-basic';
interface State {
  username?: string;
  username2?: string;
  username3?: string;
  username4?: string;
}

function Basic() {
  const form = FairysRNValtioForm.useForm<State>();

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
      <FairysRNValtioForm<State>
        title="基础使用"
        form={form}
        rules={{
          username: [{ required: true, message: '请输入用户名' }],
        }}
      >
        <FairysRNValtioForm.FormItem name="username" label="用户名">
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
        <FairysRNValtioForm.FormItem
          rules={[{ required: true, message: '请输入用户名2' }]}
          name="username2"
          label="用户名2"
        >
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
        <FairysRNValtioForm.FormItem
          rules={[{ required: true, message: '请输入用户名3' }]}
          name="username3"
          label="用户名3"
        >
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
        <FairysRNValtioForm.FormItem
          rules={[{ required: true, message: '请输入用户名4' }]}
          name="username4"
          label="用户名4"
        >
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
        <TouchableOpacity onPress={onSubmit}>
          <Text>提交</Text>
        </TouchableOpacity>
      </FairysRNValtioForm>
    </View>
  );
}
export default Basic;
