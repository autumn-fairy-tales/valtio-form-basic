---
title: 案例
---

## 样式引入

```ts
import '@fairys/valtio-form-basic/esm/styles/index.css';
```

## 基础使用

```tsx
import { FairysPCValtioForm } from '@fairys/pc-valtio-form-basic';
import { Button, Input } from 'antd';
import '@fairys/valtio-form-basic/esm/styles/index.css';

const App = () => {
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
        bordered
        title={<div>登录表单</div>}
        extra={<div>额外信息</div>}
        showColon
        rules={{
          username: [{ required: true, message: '请输入用户名' }],
        }}
        isInvalidBorderRed
        // isInvalidTextRed
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
        <FairysPCValtioForm.FormItem
          label="用户名3"
          name="username3"
          rules={[{ required: true, message: '请输入用户名3' }]}
          // helpText={<div>用户名3帮助信息</div>}
          extra={<div>用户名3额外信息</div>}
        >
          <Input placeholder="请输入" />
        </FairysPCValtioForm.FormItem>
        <FairysPCValtioForm.FormItem
          label="用户名4"
          name="username4"
          rules={[{ required: true, message: '请输入用户名4' }]}
        >
          <Input placeholder="请输入" />
        </FairysPCValtioForm.FormItem>
        <FairysPCValtioForm.FormItem
          label="用户名5"
          name="username5"
          rules={[{ required: true, message: '请输入用户名5' }]}
        >
          <Input placeholder="请输入" />
        </FairysPCValtioForm.FormItem>
      </FairysPCValtioForm>
      <Button onClick={onSubmit}>提交</Button>
    </div>
  );
};

export default App;

```
