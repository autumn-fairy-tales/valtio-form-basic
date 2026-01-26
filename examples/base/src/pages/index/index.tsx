import { View } from '@tarojs/components';
import { Button, Input } from '@nutui/nutui-react-taro';
import { FairysTaroValtioForm } from '@fairys/taro-valtio-form-basic';

function Index() {
  const form = FairysTaroValtioForm.useForm();

  const onSubmit = async () => {
    try {
      const values = await form.validate();
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <FairysTaroValtioForm form={form}
        rules={{
          username: [
            { required: true, message: '请输入用户名' },
          ],
        }}
      >
        <FairysTaroValtioForm.FormItem name="username" label="用户名">
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <FairysTaroValtioForm.FormItem
          rules={[{ required: true, message: '请输入用户名2' }]}
          name="2" label="用户名2">
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <Button onClick={onSubmit}>提交</Button>
      </FairysTaroValtioForm>
    </View>
  );
}
export default Index
