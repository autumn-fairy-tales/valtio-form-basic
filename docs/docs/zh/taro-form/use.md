---
title: 案例
---

## 引入样式

```ts title='src/app.tsx'
import '@fairys/valtio-form-basic/esm/styles/index.css';
```

## 基础使用

```tsx
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
        <FairysTaroValtioForm.FormItem rules={[{ required: true, message: '请输入用户名2' }]} name="username2" label="用户名2">
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <FairysTaroValtioForm.FormItem rules={[{ required: true, message: '请输入用户名3' }]} name="username3" label="用户名3">
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <FairysTaroValtioForm.FormItem rules={[{ required: true, message: '请输入用户名4' }]} name="username4" label="用户名4">
          <Input placeholder="请输入" />
        </FairysTaroValtioForm.FormItem>
        <Button onClick={onSubmit}>提交</Button>
      </FairysTaroValtioForm>
    </View>
  );
}
export default Basic;

```

## 隐藏表单

```tsx
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
```

## 监听表单

```tsx
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

```