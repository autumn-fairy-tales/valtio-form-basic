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
interface State {
  username?: string;
  "username2"?: string;
}
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
          <Input placeholder="请输入" />
        </FairysPCValtioForm.FormItem>
        <FairysPCValtioForm.FormItem
          label="用户名2"
          name="username2"
          rules={[{ required: true, message: '请输入用户名2' }]}
        >
          <Input placeholder="请输入" />
        </FairysPCValtioForm.FormItem>
      </FairysPCValtioForm>
      <Button onClick={onSubmit}>提交</Button>
    </div>
  );
};

export default Basice;
```


## 隐藏表单项

```tsx
import { FairysPCValtioForm } from '@fairys/pc-valtio-form-basic';
import { Button, Input } from 'antd';
interface State {
  username?: string;
  "隐藏表单项"?: string;
}

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

```

## 监听数据渲染

```tsx
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

  const formState = FairysPCValtioForm.useFormInstanceToState(form);

  return (
    <div>
      <div>用户名：{formState.username}</div>
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

```