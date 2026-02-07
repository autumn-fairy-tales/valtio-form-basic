
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
export interface FairysPCValtioFormItemProps<T extends MObject<T> = object> extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, FairysValtioFormItemAttrsProps {
    /**是否使用控制隐藏的表单项*/
    isHide?: boolean;
    /**是否使用无样式表单项*/
    noStyle?: boolean;
}
/**普通表单项*/
export declare function FairysPCValtioFormItemBase<T extends MObject<T> = object>(props: Omit<FairysPCValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**控制隐藏的表单项*/
export declare function FairysPCValtioFormHideItem<T extends MObject<T> = object>(props: Omit<FairysPCValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**无样式表单项*/
export declare function FairysPCValtioFormItemNoStyle<T extends MObject<T> = object>(props: Omit<FairysPCValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**表单项基础组件(根据isHide和noStyle判断是否使用控制隐藏的表单项和无样式表单项)*/
export declare function FairysPCValtioFormItem<T extends MObject<T> = object>(props: FairysPCValtioFormItemProps<T>): import("react/jsx-runtime").JSX.Element;
```

**表单**

```ts
import { FairysPCValtioFormItem, FairysPCValtioFormHideItem, FairysPCValtioFormItemBase } from './form.item';
import { useFairysValtioFormInstance, useFairysValtioFormInstanceContext, useFairysValtioFormInstanceContextState, useFairysValtioFormInstanceContextHideState } from '@fairys/valtio-form-basic';
import type { FairysValtioFormAttrsProps, FairysValtioFormInstance, MObject } from '@fairys/valtio-form-basic';
export interface FairysPCValtioFormProps<T extends MObject<T> = object> extends FairysValtioFormAttrsProps<T> {}

declare function FairysPCValtioFormBase<T extends MObject<T> = object>(props: FairysPCValtioFormProps<T>, ref: React.Ref<FairysValtioFormInstance<T>>): import("react/jsx-runtime").JSX.Element;

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
