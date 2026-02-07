import { View } from '@tarojs/components';
import { Button, Input } from '@nutui/nutui-react-taro';
import { FairysTaroValtioForm } from '@fairys/taro-valtio-form-basic';
interface State {
  username?: string;
  隐藏表单项?: string;
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
        <FairysTaroValtioForm.FormItem
          name="username"
          label="输入5隐藏表单项"
          onAfterUpdate={(value) => {
            console.log('value', value);
            form.updatedHideInfo({ 隐藏表单项: value === '5' });
          }}
        >
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <FairysTaroValtioForm.FormHideItem
          rules={[{ required: true, message: '请输入隐藏表单项' }]}
          name="隐藏表单项"
          label="隐藏表单项"
        >
          <Input placeholder="请输入隐藏表单项" />
        </FairysTaroValtioForm.FormHideItem>
        <Button onClick={onSubmit}>提交</Button>
      </FairysTaroValtioForm>
    </View>
  );
}
export default Basic;
