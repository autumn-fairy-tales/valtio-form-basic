import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { FairysRNValtioForm } from '@fairys/rn-valtio-form-basic';

interface State {
  username?: string;
  隐藏表单项?: string;
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
        form={form}
        title="隐藏表单项"
        rules={{
          username: [{ required: true, message: '请输入用户名' }],
        }}
      >
        <FairysRNValtioForm.FormItem
          name="username"
          label="输入5隐藏表单项"
          onAfterUpdate={(value) => {
            console.log('value', value);
            form.updatedHideInfo({ 隐藏表单项: value === '5' });
          }}
        >
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
        <FairysRNValtioForm.FormHideItem
          rules={[{ required: true, message: '请输入隐藏表单项' }]}
          name="隐藏表单项"
          label="隐藏表单项"
        >
          <TextInput placeholder="请输入隐藏表单项" />
        </FairysRNValtioForm.FormHideItem>
        <TouchableOpacity onPress={onSubmit}>
          <Text>提交</Text>
        </TouchableOpacity>
      </FairysRNValtioForm>
    </View>
  );
}
export default Basic;
