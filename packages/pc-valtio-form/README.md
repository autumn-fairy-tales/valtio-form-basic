
# pc-valtio-form-basic

## 安装

```bash
npm install @fairys/pc-valtio-form-basic  # yarn add @fairys/pc-valtio-form-basic # pnpm add @fairys/pc-valtio-form-basic
```

## 表单参数

### 类型

部分参数依赖[基础表单组件概览](https://autumn-fairy-tales.github.io/valtio-form-basic/basic-form/)

**布局**

```ts
import type { FairysValtioFormLayoutAttrsProps } from '@fairys/valtio-form-basic';
export interface FairysPCValtioFormLayoutProps extends FairysValtioFormLayoutAttrsProps {}
export declare function FairysPCValtioFormLayout(props: FairysPCValtioFormLayoutProps): import("react/jsx-runtime").JSX.Element;
```

**表单项**

```ts
/**表单项*/
import type { FairysValtioFormItemAttrsProps, MObject } from '@fairys/valtio-form-basic';
export interface FairysPCValtioFormItemProps<T extends MObject<T> = Record<string, any>> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, FairysValtioFormItemAttrsProps {
    /**是否使用控制隐藏的表单项*/
    isHide?: boolean;
    /**是否使用无样式表单项*/
    noStyle?: boolean;
}
/**普通表单项*/
export declare function FairysPCValtioFormItemBase<T extends MObject<T> = Record<string, any>>(props: Omit<FairysPCValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**控制隐藏的表单项*/
export declare function FairysPCValtioFormHideItem<T extends MObject<T> = Record<string, any>>(props: Omit<FairysPCValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**无样式表单项*/
export declare function FairysPCValtioFormItemNoStyle<T extends MObject<T> = Record<string, any>>(props: Omit<FairysPCValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**表单项基础组件(根据isHide和noStyle判断是否使用控制隐藏的表单项和无样式表单项)*/
export declare function FairysPCValtioFormItem<T extends MObject<T> = Record<string, any>>(props: FairysPCValtioFormItemProps<T>): import("react/jsx-runtime").JSX.Element;
```

**表单**

```ts
import { FairysPCValtioFormItem, FairysPCValtioFormHideItem, FairysPCValtioFormItemBase } from './form.item';
import { useFairysValtioFormInstance, useFairysValtioFormInstanceContext, useFairysValtioFormInstanceContextState, useFairysValtioFormInstanceContextHideState } from '@fairys/valtio-form-basic';
import type { FairysValtioFormAttrsProps, FairysValtioFormInstance, MObject } from '@fairys/valtio-form-basic';
export interface FairysPCValtioFormProps<T extends MObject<T> = Record<string, any>> extends FairysValtioFormAttrsProps<T> {}

declare function FairysPCValtioFormBase<T extends MObject<T> = Record<string, any>>(props: FairysPCValtioFormProps<T>, ref: React.Ref<FairysValtioFormInstance<T>>): import("react/jsx-runtime").JSX.Element;

export declare const FairysPCValtioForm: typeof FairysPCValtioFormBase & {
    /**初始化实例*/
    useForm: typeof useFairysValtioFormInstance;
    /**获取状态*/
    useFormState: typeof useFairysValtioFormInstanceContextState;
    /**获取隐藏状态*/
    useFormHideState: typeof useFairysValtioFormInstanceContextHideState;
    /**获取上下文实例*/
    useFormInstance: typeof useFairysValtioFormInstanceContext;
    /**表单项基础组件*/
    FormItemBase: typeof FairysPCValtioFormItemBase;
    /**表单项组件*/
    FormItem: typeof FairysPCValtioFormItem;
    /**隐藏表单项组件*/
    FormHideItem: typeof FairysPCValtioFormHideItem;
};

```

## 案例

### 样式引入

```ts
import '@fairys/valtio-form-basic/esm/styles/index.css';
```

### 基础使用

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


### 隐藏表单项

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

### 监听数据渲染

```tsx
import { FairysPCValtioForm } from '@fairys/pc-valtio-form-basic';
import { Button, Input } from 'antd';

interface State {
  username?: string;
}

const Cusotm = () => {
  const [formState] = FairysPCValtioForm.useFormState<State>();
  return <span>{formState.username}</span>
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
          label="用户名"
          name="username"
        >
          <Input placeholder="请输入用户名" />
        </FairysPCValtioForm.FormItem>
        <FairysPCValtioForm.FormHideItem label="监听数据渲染"  >
          <Cusotm />
        </FairysPCValtioForm.FormHideItem>
      </FairysPCValtioForm>
      <Button onClick={onSubmit}>提交</Button>
    </div>
  );
};

export default Basice;
```