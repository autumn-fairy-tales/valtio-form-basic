import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { FairysRNValtioForm } from '@fairys/rn-valtio-form-basic';
interface State {
  username?: string;
}

const Cusotm = () => {
  const [formState] = FairysRNValtioForm.useFormState<State>();
  return (
    <View>
      <Text>{formState.username}</Text>
    </View>
  );
};

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

  const formState = FairysRNValtioForm.useFormInstanceToState(form);

  return (
    <View style={{ padding: 20 }}>
      <View>用户名：{formState.username}</View>
      <FairysRNValtioForm<State>
        title="监听数据渲染"
        form={form}
        rules={{
          username: [{ required: true, message: '请输入用户名' }],
        }}
      >
        <FairysRNValtioForm.FormItem name="username" label="用户名">
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
        <FairysRNValtioForm.FormItem label="监听数据渲染">
          <Cusotm />
        </FairysRNValtioForm.FormItem>
        <TouchableOpacity onPress={onSubmit}>
          <Text>提交</Text>
        </TouchableOpacity>
      </FairysRNValtioForm>
    </View>
  );
}
export default Basic;
