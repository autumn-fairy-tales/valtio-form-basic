---
title: 案例
---

## 基础使用

```tsx
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
        form={form}
        rules={{
          username: [{ required: true, message: '请输入用户名' }],
        }}
      >
        <FairysRNValtioForm.FormItem name="username" label="用户名">
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
        <FairysRNValtioForm.FormItem rules={[{ required: true, message: '请输入用户名2' }]} name="username2" label="用户名2">
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
        <FairysRNValtioForm.FormItem rules={[{ required: true, message: '请输入用户名3' }]} name="username3" label="用户名3">
          <TextInput placeholder="请输入" />
        </FairysRNValtioForm.FormItem>
        <FairysRNValtioForm.FormItem rules={[{ required: true, message: '请输入用户名4' }]} name="username4" label="用户名4">
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
```

## 监听数据渲染

```tsx
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { FairysRNValtioForm } from '@fairys/rn-valtio-form-basic';
interface State {
  username?: string;
}

const Cusotm = () => {
  const [formState] = FairysRNValtioForm.useFormState<State>();
  return <View><Text>{formState.username}</Text></View>;
};

function Basic() {
  const form = FairysRNValtioForm.useForm();

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
      <FairysRNValtioForm
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

```

## 隐藏表单项

```tsx
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

```