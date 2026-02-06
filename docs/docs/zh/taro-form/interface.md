---
title: 表单参数
---

## 类型

部分参数依赖[基础表单组件概览](/basic-form/)

**布局**

```ts
import type { FairysValtioFormLayoutAttrsProps } from '@fairys/valtio-form-basic';
export interface FairysTaroValtioFormLayoutProps extends FairysValtioFormLayoutAttrsProps {}
export declare function FairysTaroValtioFormLayout(props: FairysTaroValtioFormLayoutProps): import("react/jsx-runtime").JSX.Element;

```

**表单项**

```ts
/**表单项*/
import type { ViewProps } from '@tarojs/components';
import type { FairysValtioFormItemAttrsProps, MObject } from '@fairys/valtio-form-basic';
export interface FairysTaroValtioFormItemProps<T extends MObject<T> = object> extends Omit<ViewProps, 'style'>, FairysValtioFormItemAttrsProps {
    /**是否使用控制隐藏的表单项*/
    isHide?: boolean;
    /**是否使用无样式表单项*/
    noStyle?: boolean;
}
/**普通表单项*/
export declare function FairysTaroValtioFormItemBase<T extends MObject<T> = object>(props: Omit<FairysTaroValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**控制隐藏的表单项*/
export declare function FairysTaroValtioFormHideItem<T extends MObject<T> = object>(props: Omit<FairysTaroValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**无样式表单项*/
export declare function FairysTaroValtioFormItemNoStyle<T extends MObject<T> = object>(props: Omit<FairysTaroValtioFormItemProps<T>, 'isHide' | 'noStyle'>): import("react/jsx-runtime").JSX.Element;
/**表单项基础组件(根据isHide和noStyle判断是否使用控制隐藏的表单项和无样式表单项)*/
export declare function FairysTaroValtioFormItem<T extends MObject<T> = object>(props: FairysTaroValtioFormItemProps<T>): import("react/jsx-runtime").JSX.Element;

```

**表单**

```ts
import React from 'react';
import { FairysTaroValtioFormItem, FairysTaroValtioFormHideItem, FairysTaroValtioFormItemBase } from './form.item';
import { useFairysValtioFormInstance, useFairysValtioFormInstanceContext, useFairysValtioFormInstanceContextState, useFairysValtioFormInstanceContextHideState } from '@fairys/valtio-form-basic';
import type { FairysValtioFormAttrsProps, FairysValtioFormInstance, MObject } from '@fairys/valtio-form-basic';

export interface FairysTaroValtioFormProps<T extends MObject<T> = object> extends FairysValtioFormAttrsProps<T> {}

declare function FairysTaroValtioFormBase<T extends MObject<T> = object>(props: FairysTaroValtioFormProps<T>, ref: React.Ref<FairysValtioFormInstance<T>>): import("react/jsx-runtime").JSX.Element;
export declare const FairysTaroValtioForm: typeof FairysTaroValtioFormBase & {
    /**初始化实例*/
    useForm: typeof useFairysValtioFormInstance;
    /**获取状态*/
    useFormState: typeof useFairysValtioFormInstanceContextState;
    /**获取隐藏状态*/
    useFormHideState: typeof useFairysValtioFormInstanceContextHideState;
    /**获取上下文实例*/
    useFormInstance: typeof useFairysValtioFormInstanceContext;
    /**表单项基础组件*/
    FormItemBase: typeof FairysTaroValtioFormItemBase;
    /**表单项组件*/
    FormItem: typeof FairysTaroValtioFormItem;
    /**隐藏表单项组件*/
    FormHideItem: typeof FairysTaroValtioFormHideItem;
};

```