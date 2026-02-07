# rn-valtio-form-basic

## 安装

```bash
npm install @fairys/rn-valtio-form-basic # yarn add @fairys/rn-valtio-form-basic # pnpm add @fairys/rn-valtio-form-basic
```

## 表单参数

### 重写样式部分

**布局**

```ts
import { ViewProps } from 'react-native';
import type { FairysValtioFormLayoutContextOptions as _FairysValtioFormLayoutContextOptions } from '@fairys/valtio-form-basic';
export interface FairysValtioFormLayoutContextOptions extends Omit<_FairysValtioFormLayoutContextOptions, 'formItemStyle' | 'formItemLabelStyle' | 'formItemBodyStyle' | 'formItemClassName' | 'formItemLabelClassName' | 'formItemBodyClassName' | ''> {
    /**表单项 style*/
    formItemStyle?: ViewProps['style'];
    /**表单项 label  style*/
    formItemLabelStyle?: ViewProps['style'];
    /**表单项 body  style*/
    formItemBodyStyle?: ViewProps['style'];
}
export interface FairysValtioFormLayoutAttrsProps extends FairysValtioFormLayoutContextOptions {
    /**
     * @description gap 属性是用来设置网格行与列之间的间隙，该属性是row-gap and column-gap的简写形式。
     */
    gap?: string | number;
    /**标题*/
    title?: React.ReactNode;
    /**额外内容*/
    extra?: React.ReactNode;
    /**内容*/
    children?: React.ReactNode;
    /**布局样式*/
    style?: ViewProps['style'];
    /**头部样式*/
    headerStyle?: ViewProps['style'];
    headerTextStyle?: ViewProps['style'];
    /**额外内容样式*/
    headerExtraStyle?: ViewProps['style'];
    /**内容样式*/
    bodyStyle?: ViewProps['style'];
    /**是否边框*/
    bordered?: boolean;
}
export declare class FairysValtioFormLayoutInstance {
    state: FairysValtioFormLayoutContextOptions;
    updated: (options?: FairysValtioFormLayoutContextOptions) => void;
}
/**初始化实例*/ 
export declare const useFairysValtioFormLayoutInstance: (instance?: FairysValtioFormLayoutInstance) => FairysValtioFormLayoutInstance;
/**布局上下文*/
export declare const FairysValtioFormLayoutContext: import("react").Context<FairysValtioFormLayoutInstance>;
/**获取布局上下文*/
export declare const useFairysValtioFormLayoutContext: () => [FairysValtioFormLayoutContextOptions, FairysValtioFormLayoutInstance];
/**
 * 布局属性处理
*/
export declare function useFairysValtioFormLayoutAttrs(props: FairysValtioFormLayoutAttrsProps): FairysValtioFormLayoutAttrsReturn;
export interface FairysValtioFormLayoutAttrsReturn {
    /**列数*/
    colCount: number;
    /**规则校验失败错误提示位置*/
    errorLayout: string;
    /**
     * label显示模式
     * @platform RN 支持 between
     */
    labelMode: string;
    /**
     * 底部边框类型
     */
    itemBorderType: string;
    /**表单布局实例*/
    formLayoutInstance: FairysValtioFormLayoutInstance;
    /**布局样式*/
    layoutStyle: ViewProps['style'];
    /**头部样式*/
    headerStyle: ViewProps['style'];
    /**头部标题样式*/
    headerTitleStyle: ViewProps['style'];
    /**头部额外内容样式*/
    headerExtraStyle: ViewProps['style'];
    /**内容样式*/
    bodyStyle: ViewProps['style'];
}
```

**表单项**

```ts
/**表单项*/
import React from 'react';
import { ViewProps } from 'react-native';
import type { MObject, FairysValtioFormItemAttrsProps as _FairysValtioFormItemAttrsProps } from '@fairys/valtio-form-basic';
import { FairysValtioFormInstance, FairysValtioFormParentAttrs } from '@fairys/valtio-form-basic/esm/common';
import { FairysValtioFormLayoutContextOptions } from './layout';
export interface FairysValtioFormItemAttrsProps<T extends MObject<T> = Record<string, any>> extends Omit<_FairysValtioFormItemAttrsProps<T>, 'style' | 'labelStyle' | 'bodyStyle' | 'rowSpan' | 'className' | 'labelClassName' | 'bodyClassName'> {
    style?: ViewProps['style'];
    labelStyle?: ViewProps['style'];
    bodyStyle?: ViewProps['style'];
}
/**
 * 处理表单表单项属性
 *
*/
export declare function useFairysValtioFormItemAttrs<T extends MObject<T> = Record<string, any>>(props: FairysValtioFormItemAttrsProps<T>): FairysValtioFormItemAttrsReturn<T>;
export interface FairysValtioFormItemAttrsReturn<T extends MObject<T> = Record<string, any>> {
    /**表单项值*/
    value?: any;
    /**是否校验错误*/
    isInvalid: boolean;
    /**边框类型*/
    itemBorderType: FairysValtioFormLayoutContextOptions['itemBorderType'];
    /**值改变事件*/
    onValueChange: (event: any) => void;
    /**当前表单项占据列数*/
    colSpan: number;
    /**列数*/
    colCount: number;
    /**标签显示模式*/
    labelMode: FairysValtioFormLayoutContextOptions['labelMode'];
    /**错误提示位置*/
    errorLayout: FairysValtioFormLayoutContextOptions['errorLayout'];
    /**是否必填*/
    isRequired: boolean;
    /**表单状态*/
    state: T;
    /**错误状态*/
    errorState: Record<PropertyKey, string[]>;
    /**表单实例*/
    formInstance: FairysValtioFormInstance<T>;
    /**错误信息*/
    error?: string[];
    /**拼接父级字段名后得到的表单项名称*/
    _name?: string;
    /**表单项名称*/
    name?: string;
    /**表单项ID*/
    id?: string;
    /**表单项路径*/
    paths?: (string | number)[];
    /**父级字段名*/
    parentName?: string;
    /**表单属性名实例*/
    formAttrsNameInstance: FairysValtioFormParentAttrs;
    /**是否显示冒号*/
    showColon: boolean;
    // 基础样式
    /**表单项样式*/
    itemStyle: ViewProps['style'];
    /**表单项容器样式*/
    itemContainerStyle: ViewProps['style'];
    /**表单项标签样式*/
    itemLabelStyle: ViewProps['style'];
    /**表单项标签文本样式*/
    itemLabelTextStyle: ViewProps['style'];
    /**表单项标签显示冒号样式*/
    itemLabelShowColonStyle: ViewProps['style'];
    /**表单项主体样式*/
    itemBodyStyle: ViewProps['style'];
    /**表单项输入样式*/
    itemInputStyle: ViewProps['style'];
    /**表单项额外样式*/
    itemExtraStyle: ViewProps['style'];
    /**错误样式*/
    errorStyle: ViewProps['style'];
    /**帮助样式*/
    helpStyle: ViewProps['style'];
    /**子元素*/
    children?: React.ReactNode;
}
/**
 * 没有样式的表单项属性，仅返回基础输入组件参数
*/
export declare function useFairysValtioFormItemNoStyleAttrs<T extends MObject<T> = Record<string, any>>(props: FairysValtioFormItemAttrsProps<T>): FairysValtioFormItemNoStyleAttrsReturn<T>;
export interface FairysValtioFormItemNoStyleAttrsReturn<T extends MObject<T> = Record<string, any>> {
    /**表单项值*/
    value?: any;
    /**是否校验错误*/
    isInvalid: boolean;
    /**是否必填*/
    isRequired: boolean;
    /**错误信息*/
    error?: string[];
    /**值改变事件*/
    onValueChange: (event: any) => void;
    /**表单状态*/
    state: T;
    /**错误状态*/
    errorState: Record<PropertyKey, string[]>;
    /**表单实例*/
    formInstance: FairysValtioFormInstance<T>;
    /**拼接父级字段名后得到的表单项名称*/
    _name?: string;
    /**表单项名称*/
    name?: string;
    /**表单项ID*/
    id?: string;
    /**表单项路径*/
    paths?: (string | number)[];
    /**父级字段名*/
    parentName?: string;
    /**表单属性名实例*/
    formAttrsNameInstance: FairysValtioFormParentAttrs;
    /**子元素*/
    children?: React.ReactNode;
}
```

**表单**

```ts
import type { MObject } from '@fairys/valtio-form-basic/esm/common';
import { FairysValtioFormInstance } from '@fairys/valtio-form-basic/esm/common';
import { type ReactNode } from 'react';
import { FairysValtioFormLayoutAttrsProps } from './layout';
import { RuleItem } from 'async-validator';
export interface FairysValtioFormAttrsProps<T extends MObject<T> = Record<string, any>> extends FairysValtioFormLayoutAttrsProps {
    /**表单实例*/
    form?: FairysValtioFormInstance<T>;
    /**子元素*/
    children: ReactNode;
    /**表单项规则(如果表单项没有指定规则，则使用全局规则，如果表单项指定规则，则使用表单项规则)*/
    rules?: Record<PropertyKey, RuleItem[]>;
    /**表单初始值*/
    formData?: FairysValtioFormInstance<T>['state'];
    /**表单隐藏状态*/
    hideState?: FairysValtioFormInstance<T>['hideState'];
    /**
     * 初始化表单数据类型，默认值为 deepCopy
     * - deepCopy：使用深度拷贝初始化表单数据
     * - immutable：直接使用对象(注意：当传递的不是`valtio`的`proxy`对象时，会使用`valtio`中的`proxy`声明)
     */
    initFormDataType?: 'deepCopy' | 'immutable';
    /**
     * 表单值改变时回调
     * @param path 表单项路径
     * @param value 表单项值
     */
    onValuesChange?: (path: PropertyKey, value: any) => void;

}
/**
 * 表单属性处理
*/
export declare function useFairysValtioForm<T extends MObject<T> = Record<string, any>>(props: FairysValtioFormAttrsProps<T>, ref: React.Ref<FairysValtioFormInstance<T>>): Omit<FairysValtioFormAttrsProps<T>, "initFormDataType" | "form" | "rules" | "formData" | "hideState"|"onValuesChange"> & {
    formInstance: FairysValtioFormInstance<T>;
};

```

### 类型

部分参数依赖[基础表单组件概览](https://autumn-fairy-tales.github.io/valtio-form-basic/basic-form/)

**布局**

```ts
import type { FairysValtioFormLayoutAttrsProps } from './hooks/layout';
export interface FairysRNValtioFormLayoutProps extends FairysValtioFormLayoutAttrsProps {}
export declare function FairysRNValtioFormLayout(props: FairysRNValtioFormLayoutProps): import("react/jsx-runtime").JSX.Element;

```

**表单项**

```ts
/**表单项*/
import type { ViewProps } from 'react-native';
import type { MObject } from '@fairys/valtio-form-basic';
import type { FairysValtioFormItemAttrsProps } from './hooks/form.item';
export interface FairysRNValtioFormItemProps<T extends MObject<T> = Record<string, any>> extends Omit<ViewProps, 'style'>, FairysValtioFormItemAttrsProps {
    /**是否使用控制隐藏的表单项*/
    isHide?: boolean;
    /**是否使用无样式表单项*/
    noStyle?: boolean;
}
/**普通表单项*/
export declare function FairysRNValtioFormItemBase<T extends MObject<T> = Record<string, any>>(props: Omit<FairysRNValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**控制隐藏的表单项*/
export declare function FairysRNValtioFormHideItem<T extends MObject<T> = Record<string, any>>(props: Omit<FairysRNValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**无样式表单项*/
export declare function FairysRNValtioFormItemNoStyle<T extends MObject<T> = Record<string, any>>(props: Omit<FairysRNValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**表单项基础组件(根据isHide和noStyle判断是否使用控制隐藏的表单项和无样式表单项)*/
export declare function FairysRNValtioFormItem<T extends MObject<T> = Record<string, any>>(props: FairysRNValtioFormItemProps<T>): import("react/jsx-runtime").JSX.Element;

```

**表单**

```ts
import React from 'react';
import { FairysRNValtioFormItem, FairysRNValtioFormHideItem, FairysRNValtioFormItemBase } from './form.item';
import { useFairysValtioFormInstance, useFairysValtioFormInstanceContext, useFairysValtioFormInstanceContextState, useFairysValtioFormInstanceContextHideState } from '@fairys/valtio-form-basic/esm/common';
import type { FairysValtioFormInstance, MObject } from '@fairys/valtio-form-basic/esm/common';
import type { FairysValtioFormAttrsProps } from './hooks/form';
export interface FairysRNValtioFormProps<T extends MObject<T> = Record<string, any>> extends FairysValtioFormAttrsProps<T> {
}
declare function FairysRNValtioFormBase<T extends MObject<T> = Record<string, any>>(props: FairysRNValtioFormProps<T>, ref: React.Ref<FairysValtioFormInstance<T>>): import("react/jsx-runtime").JSX.Element;
export declare const FairysRNValtioForm: typeof FairysRNValtioFormBase & {
    /**初始化实例*/
    useForm: typeof useFairysValtioFormInstance;
    /**获取状态*/
    useFormState: typeof useFairysValtioFormInstanceContextState;
    /**获取隐藏状态*/
    useFormHideState: typeof useFairysValtioFormInstanceContextHideState;
    /**获取上下文实例*/
    useFormInstance: typeof useFairysValtioFormInstanceContext;
    /**表单项基础组件*/
    FormItemBase: typeof FairysRNValtioFormItemBase;
    /**表单项组件*/
    FormItem: typeof FairysRNValtioFormItem;
    /**隐藏表单项组件*/
    FormHideItem: typeof FairysRNValtioFormHideItem;
};
```

## 案例

### 基础使用

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

### 监听数据渲染

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

### 隐藏表单项

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