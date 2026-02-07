import { FairysPCValtioForm } from '@fairys/pc-valtio-form-basic';
import { Button, Input } from 'antd';

const Basice = () => {
  const form = FairysPCValtioForm.useForm();
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
      <FairysPCValtioForm
        form={form}
        rules={{
          username: [{ required: true, message: '请输入用户名' }],
        }}
      >
        <FairysPCValtioForm.FormItem
          label="输入5隐藏表单项"
          name="username"
          onAfterUpdate={(value) => {
            console.log('value', value);
            form.updatedHideInfo({ 隐藏表单项: value === '5' });
          }}
        >
          <Input placeholder="请输入内容5" />
        </FairysPCValtioForm.FormItem>
        <FairysPCValtioForm.FormHideItem
          label="隐藏表单项"
          name="隐藏表单项"
          rules={[{ required: true, message: '请输入隐藏表单项' }]}
        >
          <Input placeholder="请输入" />
        </FairysPCValtioForm.FormHideItem>
      </FairysPCValtioForm>
      <Button onClick={onSubmit}>提交</Button>
    </div>
  );
};

export default Basice;
