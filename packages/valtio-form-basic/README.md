# valtio-form-basic

使用 valtio 实现的表单基础库, 使其更加便捷，同时支持`PC`、`H5`、`Taro`、`RN`，同时也更加灵活。

## 安装

```bash
npm install @fairys/valtio-form-basic # yarn add @fairys/valtio-form-basic # pnpm add @fairys/valtio-form-basic
```

## 类型

###  类型方法

```ts title="src/common/interface.ts"
export type MObject<T> = {
    [K in keyof T]: T[K];
};
export type MakeFieldRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
```

###  实例

```ts title="src/common/instance/index.ts"
import { MObject } from '../interface';
import { RuleItem, ValidateFieldsError, Values } from 'async-validator';
import { FairysValtioFormAttrsProps } from '../../form/form';
/**表单实例*/
export declare class FairysValtioFormInstance<T extends MObject<T> = Record<string, any>> {
    /***
     * 判断值是否为代理对象
     * @param value 值
     * @returns 是否为代理对象
     */
    isValtioProxy: (value: any) => boolean;
    /**状态*/
    state: T;
    /**
     * 错误信息
     */
    errorState: Record<PropertyKey, string[]>;
    /**隐藏状态*/
    hideState: Record<PropertyKey, boolean>;
    /**初始化表单值*/
    ctor: (options?: {
        formData?: Partial<T>;
        hideState?: Record<PropertyKey, boolean>;
        initFormDataType?: FairysValtioFormAttrsProps["initFormDataType"];
    }) => void;
    /**
     * 更新数据
     * @param state 更新数据对象
     * @param isValidate 是否验证(可选)
     */
    updated: <M = T>(state: Partial<M>, isValidate?: boolean) => void;
    /**根据路径设置值
     * @param path 值路径
     * @param value 值
     */
    updatedValueByPaths: (path: PropertyKey, value: any) => void;
    /**
     * 更新行数据的隐藏信息
     * @param objectHideInfo 行数据隐藏信息对象
     */
    updatedHideInfo: (objectHideInfo: Record<PropertyKey, boolean>) => this;
    /**
     * 清理隐藏信息
     */
    clearHideInfo: (fields?: PropertyKey[]) => this;
    /**
     * 更新行数据的错误信息
     * @param objectErrorInfo 行数据错误信息对象
     */
    updatedErrorInfo: (objectErrorInfo: Record<PropertyKey, string[]>) => this;
    /**
     * 清理错误信息
     */
    clearErrorInfo: (fields?: PropertyKey[]) => this;
    /**
     * 清理所有数据
     */
    clear: () => void;
    /**由表单项挂载规则,(根据表单项的字段存储路径对应校验规则)*/
    mountRules: Record<PropertyKey, RuleItem[]>;
    /**移除表单项挂载规则*/
    removeRules: (name: PropertyKey) => void;
    /**表单项规则*/
    rules: Record<PropertyKey, RuleItem[]>;
    /**表单项名称到路径映射*/
    nameToPaths: Record<PropertyKey, PropertyKey[]>;
    /**验证表单项规则
     * @param fields 要验证的字段(可选)
     * @param isReturn 是否返回验证结果(可选)
     */
    validate: (fields?: PropertyKey[], isReturn?: boolean) => Promise<ValidateFieldsError | Values>;
    /**
     * 验证某些前缀的字段
     * @param prefix 前缀字段数组
     * @param isReturn 是否返回验证结果(可选)
     */
    validatePrefixFields: (prefix: string[], isReturn?: boolean) => Promise<ValidateFieldsError | Values>;
}

```

***声明实例***

```ts
/**声明实例*/
export declare function useFairysValtioFormInstance<T extends MObject<T> = Record<string, any>>(instance?: FairysValtioFormInstance<T>): FairysValtioFormInstance<T>;
```

***表单实例上下文***

```ts
/**表单实例上下文*/
export declare const FairysValtioFormInstanceContext: import("react").Context<FairysValtioFormInstance<any>>;
```

***获取表单实例上下文***

```ts
/**获取表单实例上下文*/
export declare function useFairysValtioFormInstanceContext<T extends MObject<T> = Record<string, any>>(): FairysValtioFormInstance<T>;
```

***状态取值***

```ts
/**状态取值*/
export declare function useFairysValtioFormInstanceContextState<T extends MObject<T> = Record<string, any>>(): [T, Record<PropertyKey, string[]>, FairysValtioFormInstance<T>, any, any];
```

***隐藏组件状态取值***

```ts
/**隐藏组件状态取值*/
export declare function useFairysValtioFormInstanceContextHideState<T extends MObject<T> = Record<string, any>>(): [Record<PropertyKey, boolean>, FairysValtioFormInstance<T>, any];
```


###  获取父级表单项`name`属性值

```ts title="src/common/hooks/index.ts"
export interface FairysValtioFormParentAttrsState {
    name?: string;
}
/***
 * 父级属性
 */
export declare class FairysValtioFormParentAttrs {
    state: FairysValtioFormParentAttrsState;
    updated: (attrs: Record<string, any>) => void;
    /***更新父级字段值*/
    updatedName: (name?: string, parentName?: string) => void;
}
export interface FairysValtioFormAttrsNameOptions {
    name?: string;
    /**是否拼接父级字段名*/
    isJoinParentField?: boolean;
}
```

***初始化父级属性*****
```ts
/**初始化父级属性*/
export declare const useFairysValtioFormParentAttrs: (instance?: FairysValtioFormParentAttrs) => FairysValtioFormParentAttrs;
```

***父级属性上下文***
```ts
/***父级属性上下文*/
export declare const FairysValtioFormParentAttrsContext: import("react").Context<FairysValtioFormParentAttrs>;
```

***获取父级属性实例***
```ts
/**获取父级属性实例*/
export declare const useFairysValtioFormParentAttrsContext: () => FairysValtioFormParentAttrs;
```

***获取父级属性状态***
```ts
/**获取父级属性状态*/
export declare const useFairysValtioFormParentAttrsState: () => readonly [{
    readonly name?: string;
}, FairysValtioFormParentAttrs];

```

***获取属性名和路径***
```ts
/**获取属性名和路径*/
export declare const useFairysValtioFormAttrsName: (options?: FairysValtioFormAttrsNameOptions) => {
    formAttrsNameInstance: FairysValtioFormParentAttrs;
    parentName: string;
    name: string;
    paths: (number | symbol)[] | (string | number)[];
};
```

###  useId 

```ts title="src/common/hooks/index.ts"
export declare const useId: (suffix?: string) => string;
```

###  form

```ts title="src/form/form.tsx"
import { MObject } from '../common/interface';
import { FairysValtioFormInstance } from '../common/instance';
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
}
/**
 * 表单属性处理
 *
 * @example
 *
 * ```tsx
import { useFairysValtioForm } from "@fairys/valtio-form"
import type { FairysValtioFormAttrProps } from "@fairys/valtio-form"
export interface FormProps extends FairysValtioFormAttrProps{}

export const Form = (props: FormProps) => {
  const { formInstance,children, ...rest } = useFairysValtioForm(props)
  return  (
    <FairysValtioFormInstanceContext.Provider value={formInstance}>
      <布局组件 {...rest}>{children}</布局组件>
    </FairysValtioFormInstanceContext.Provider>
  );
}
 * ```
*/
export declare function useFairysValtioForm<T extends MObject<T> = Record<string, any>>(props: FairysValtioFormAttrsProps<T>, ref: React.Ref<FairysValtioFormInstance<T>>): {
    formInstance: FairysValtioFormInstance<T>;
    /**子元素*/
    children: ReactNode;
    gap?: string | number;
    title?: React.ReactNode;
    extra?: React.ReactNode;
    isAllColSpan?: boolean;
    className?: string;
    style?: React.CSSProperties;
    headerClassName?: string;
    headerStyle?: React.CSSProperties;
    bodyClassName?: string;
    bodyStyle?: React.CSSProperties;
    bordered?: boolean;
    boxShadow?: boolean;
    lastItemBordered?: boolean;
    platform?: "pc" | "rn" | "taro";
    colCount?: number;
    errorLayout?: "bottom-left" | "bottom-right" | "top-right" | "top-left" | "left-border-top" | "right-border-top";
    labelMode?: "left" | "top" | "between";
    formItemClassName?: string;
    formItemStyle?: React.CSSProperties;
    formItemLabelClassName?: string;
    formItemLabelStyle?: React.CSSProperties;
    formItemBodyClassName?: string;
    formItemBodyStyle?: React.CSSProperties;
    itemBorderType?: "bottom" | "body" | "none";
    itemBorderColor?: React.CSSProperties["borderColor"];
    isInvalidBorderRed?: boolean;
    isInvalidTextRed?: boolean;
    showColon?: boolean;
};

```

###  formItem

```ts title="src/form/form.item.tsx"
/**表单项*/
import { MObject } from '../common/interface';
import React from 'react';
import { FairysValtioFormInstance } from '../common/instance';
import { FairysValtioFormLayoutContextOptions } from './layout';
import { FairysValtioFormParentAttrs } from '../common/hooks';
import { RuleItem } from 'async-validator';
export interface FairysValtioFormItemAttrsProps<T extends MObject<T> = Record<string, any>> {
    /**平台*/
    platform?: 'pc' | 'rn' | 'taro';
    /**
     * 表单项名称 ，字段需要和存储的字段路径一致
     *
     * @example
     * 路径中的值为 number 类型时，会创建一个空数组。路径中的值为 string 类型时，会创建一个空对象。最后一个直接赋值
     *
     * 默认："name"
     * 嵌套字段："name.a.doc" ===> { name: { a: { doc: undefined } } }
     * 嵌套字段："name[1].a.doc" ===> { name: [{}, { a: { doc: undefined } }] }
     * 嵌套字段："name.a[2].doc" ===> { name: { a: [{}, {}, { doc: undefined }] } }
     */
    name?: string;
    /**表单项标签*/
    label?: string;
    /**传递组件字段*/
    valuePropName?: string;
    /**取值字段(默认 valuePropName字段值)*/
    getValuePath?: string;
    /**自定义获取值*/
    getValueFromEvent?: (event: any, form: FairysValtioFormInstance<T>) => any;
    /**值格式化*/
    formatValue?: (value: any, form: FairysValtioFormInstance<T>, event: any) => any;
    /**触发数据更新之后触发（用于数据联动之类的）*/
    onAfterUpdate?: (value: any, form: FairysValtioFormInstance<T>, event: any) => void;
    /**事件名称*/
    trigger?: string;
    className?: string;
    style?: React.CSSProperties;
    labelClassName?: string;
    labelStyle?: React.CSSProperties;
    bodyClassName?: string;
    bodyStyle?: React.CSSProperties;
    children?: React.ReactNode;
    /**规则校验失败错误提示位置*/
    errorLayout?: FairysValtioFormLayoutContextOptions['errorLayout'];
    /**label显示模式*/
    labelMode?: FairysValtioFormLayoutContextOptions['labelMode'];
    /**额外内容*/
    extra?: React.ReactNode;
    /**底部提示内容*/
    helpText?: React.ReactNode;
    /**
     * 表单项占据列数
     * @default 1
     */
    colSpan?: number;
    /**
     * 表单项占据行数
     * @default 1
     */
    rowSpan?: number;
    /**是否必填*/
    isRequired?: boolean;
    /**是否显示冒号*/
    showColon?: boolean;
    /**底部显示边框*/
    itemBorderType?: FairysValtioFormLayoutContextOptions['itemBorderType'];
    /**边框颜色*/
    itemBorderColor?: React.CSSProperties['borderColor'];
    /**是否校验失败时显示红色边框*/
    isInvalidBorderRed?: boolean;
    /**是否校验失败时显示红色文本*/
    isInvalidTextRed?: boolean;
    /**输入框属性*/
    attrs?: any;
    /**是否拼接父级字段名*/
    isJoinParentField?: boolean;
    /**校验规则*/
    rules?: RuleItem[];
}

```

***表单项属性参数处理***

```ts
/**
 * 处理表单表单项属性
 *
 * @example
 *
 * ```tsx
import { Fragment } from 'react'
import { useFairysValtioFormItemAttrs , FairysValtioFormParentAttrsContext } from "@fairys/valtio-form"
import type { FairysValtioFormItemAttrsProps } from "@fairys/valtio-form"
export interface FormItemProps extends FairysValtioFormItemAttrsProps{}

export const FormItem = (props: FormItemProps) => {
  const { label, extra, helpText } = props
  const {
    itemClassName, itemStyle, containerClassName, itemLabelClassName, itemLabelStyle,
    itemBodyClassName, itemBodyStyle, itemInputClassName, itemExtraClassName, errorClassName, helpClassName,
    isInvalid, itemBorderType, children, error,formAttrsNameInstance
  } = useFairysValtioFormItemAttrs(props)

  return (
   <FairysValtioFormParentAttrsContext.Provider value={formAttrsNameInstance}>
    <View className={itemClassName} style={itemStyle}>
      <View className={containerClassName}>
        <View className={itemLabelClassName} style={itemLabelStyle}>
          {label}
        </View>
        <View className={itemBodyClassName} style={itemBodyStyle}>
          <View className={itemInputClassName}>
            {children}
          </View>
          {extra ? <View className={itemExtraClassName}>{extra}</View> : <Fragment />}
          {itemBorderType === 'body' && isInvalid ? <View className={errorClassName}>{error}</View> : <Fragment />}
        </View>
      </View>
      {helpText ? <View className={helpClassName}>{helpText}</View> : <Fragment />}
      {isInvalid && itemBorderType !== 'body' ? <View className={errorClassName}>{error}</View> : <Fragment />}
    </View>
   </FairysValtioFormParentAttrsContext.Provider>
  );
}
 * ```
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
    /**当前表单项占据行数*/
    rowSpan: number;
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
    /**表单项类名*/
    itemClassName: string;
    /**表单项样式*/
    itemStyle: React.CSSProperties;
    /**容器类名*/
    containerClassName: string;
    /**标签类名*/
    itemLabelClassName: string;
    /**标签样式*/
    itemLabelStyle: React.CSSProperties;
    /**体类名*/
    itemBodyClassName: string;
    /**体样式*/
    itemBodyStyle: React.CSSProperties;
    /**输入框类名*/
    itemInputClassName: string;
    /**额外内容类名*/
    itemExtraClassName: string;
    /**错误提示类名*/
    errorClassName: string;
    /**帮助提示类名*/
    helpClassName: string;
    /**子元素*/
    children?: React.ReactNode;
}

```

***没有样式的表单项属性，仅返回基础输入组件参数***

```ts
/**
 * 没有样式的表单项属性，仅返回基础输入组件参数
 *
 * @example
 *
 *```tsx
import { Fragment } from 'react'
import { useFairysValtioFormItemAttrs, FairysValtioFormParentAttrsContext } from "@fairys/valtio-form"
import type { FairysValtioFormItemAttrsProps } from "@fairys/valtio-form"
export interface FormItemProps extends FairysValtioFormItemAttrsProps{}

export const FormItem = (props: FormItemProps) => {
  const { children , formAttrsNameInstance } = useFairysValtioFormItemNoStyleAttrs(props)
  return <FairysValtioFormParentAttrsContext.Provider value={formAttrsNameInstance}>
    {children}
  </FairysValtioFormParentAttrsContext.Provider>
}
 * ```
*/
export declare function useFairysValtioFormItemNoStyleAttrs<T extends MObject<T> = Record<string, any>>(props: FairysValtioFormItemAttrsProps<T>): {
    value: unknown;
    error: string[];
    onValueChange: (event: any) => void;
    state: T;
    errorState: Record<PropertyKey, string[]>;
    formInstance: FairysValtioFormInstance<T>;
    _name: string;
    name: string;
    id: string;
    paths: (number | symbol)[] | (string | number)[];
    parentName: string;
    formAttrsNameInstance: FairysValtioFormParentAttrs;
    children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode>;
};
```

###  layout

```ts title="src/form/layout.tsx"
export interface FairysValtioFormLayoutContextOptions {
    /**平台*/
    platform?: 'pc' | 'rn' | 'taro';
    /**列数据*/
    colCount?: number;
    /**规则校验失败错误提示位置*/
    errorLayout?: 'bottom-left' | 'bottom-right' | 'top-right' | 'top-left' | 'left-border-top' | 'right-border-top';
    /**
     * label显示模式
     * @platform taro 支持 between
     */
    labelMode?: 'left' | 'top' | 'between';
    /**表单项 className*/
    formItemClassName?: string;
    /**表单项 style*/
    formItemStyle?: React.CSSProperties;
    /**表单项 label  className*/
    formItemLabelClassName?: string;
    /**表单项 label  style*/
    formItemLabelStyle?: React.CSSProperties;
    /**表单项 body  className*/
    formItemBodyClassName?: string;
    /**表单项 body  style*/
    formItemBodyStyle?: React.CSSProperties;
    /**
     * 底部边框类型
     */
    itemBorderType?: 'bottom' | 'body' | 'none';
    /**边框颜色*/
    itemBorderColor?: React.CSSProperties['borderColor'];
    /**是否校验失败时显示红色边框*/
    isInvalidBorderRed?: boolean;
    /**是否校验失败时显示红色文本*/
    isInvalidTextRed?: boolean;
    /**是否显示冒号*/
    showColon?: boolean;
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
    /**是否占据整行*/
    isAllColSpan?: boolean;
    className?: string;
    style?: React.CSSProperties;
    /**头部ClassName*/
    headerClassName?: string;
    /**头部样式*/
    headerStyle?: React.CSSProperties;
    /**内容ClassName*/
    bodyClassName?: string;
    /**内容样式*/
    bodyStyle?: React.CSSProperties;
    /**是否边框*/
    bordered?: boolean;
    /**显示阴影*/
    boxShadow?: boolean;
    /**最后一个是否显示底部边框*/
    lastItemBordered?: boolean;
}
export declare class FairysValtioFormLayoutInstance {
    state: FairysValtioFormLayoutContextOptions;
    updated: (options?: FairysValtioFormLayoutContextOptions) => void;
}

```

***初始化布局实例***

```ts
export declare const useFairysValtioFormLayoutInstance: (instance?: FairysValtioFormLayoutInstance) => FairysValtioFormLayoutInstance;
```

***创建布局上下文***

```ts
export declare const FairysValtioFormLayoutContext: import("react").Context<FairysValtioFormLayoutInstance>;
```
***获取布局上下文***

```ts
export declare const useFairysValtioFormLayoutContext: () => [FairysValtioFormLayoutContextOptions, FairysValtioFormLayoutInstance];
```

***布局参数处理***

```ts
/**
 * 布局属性处理
 *
 * @example
 *
 * ```tsx
import { Fragment } from 'react'
import { useFairysValtioFormLayoutAttrs, FairysValtioFormLayoutContext } from "@fairys/valtio-form"
import type { FairysValtioFormLayoutAttrsProps } from "@fairys/valtio-form"

export interface LayoutProps extends FairysValtioFormLayoutAttrsProps {}

export const Layout = (props: LayoutProps) => {
  const { children, title, extra } = props
  const {
    formLayoutInstance,
    layoutName, layoutStyle,
    headerName, headerStyle,
    headerTitleName, headerExtraName,
    bodyName, bodyStyle
  } = useFairysValtioFormLayoutAttrs(props)

   return (
     <FairysValtioFormLayoutContext.Provider value={formLayoutInstance}>
       <div className={layoutName} style={layoutStyle}>
         <div>
           {title || extra ? (
             <div style={headerStyle} className={headerName}>
               <div className={headerTitleName}>{title}</div>
               <div className={headerExtraName}>{extra}</div>
             </div>
           ) : (
             <Fragment />
           )}
         </div>
         <div className={bodyName} style={bodyStyle}>
           {children}
         </div>
       </div>
     </FairysValtioFormLayoutContext.Provider>
   );
}
* ```
*/
export declare function useFairysValtioFormLayoutAttrs(props: FairysValtioFormLayoutAttrsProps): FairysValtioFormLayoutAttrsReturn;
export interface FairysValtioFormLayoutAttrsReturn {
    /**列数*/
    colCount: number;
    /**规则校验失败错误提示位置*/
    errorLayout: string;
    /**
     * label显示模式
     * @platform taro 支持 between
     */
    labelMode: string;
    /**
     * 底部边框类型
     */
    itemBorderType: string;
    /**表单布局实例*/
    formLayoutInstance: FairysValtioFormLayoutInstance;
    /**布局ClassName*/
    layoutName: string;
    /**布局样式*/
    layoutStyle: React.CSSProperties;
    /**头部ClassName*/
    headerName: string;
    /**头部样式*/
    headerStyle: React.CSSProperties;
    /**头部标题ClassName*/
    headerTitleName: string;
    /**头部额外内容ClassName*/
    headerExtraName: string;
    /**内容ClassName*/
    bodyName: string;
    /**内容样式*/
    bodyStyle: React.CSSProperties;
}
```

###  utils

```ts title="src/common/utils/index.ts"
/***
 * 设置值
 * @param object 任意对象
 * @param paths 值路径
 * @param nextValue 新值
 *
 * @description
 * 值不存在时，当 paths 路径中的值为 number 类型时，会创建一个空数组。当 paths 路径中的值为 string 类型时，会创建一个空对象。
 */
export declare function set<T>(state: any, paths: PropertyKey[], nextValue: T): any;
/***
 * 获取值
 * @param value 任意值
 * @param segments 键路径
 */
export declare function get<TDefault = unknown>(value: any, segments: PropertyKey[]): TDefault;
/***
 * 格式化路径，将路径中的数组索引转换为数字
 * @param path 路径
 * @returns 格式化后的路径
 */
export declare function formatePath(path: PropertyKey): (number | symbol)[] | (string | number)[];
/**格式化属性名*/
export declare function formateName(name?: string, parentName?: string): string;
/***
 * 是否为对象
 * @param x 任意值
 * @returns 是否为对象
 */
export declare const isObject: (x: unknown) => x is object;
```


## 使用基础表单组件

### 布局组件

```tsx

import { Fragment } from 'react';
import type { FairysValtioFormLayoutAttrsProps } from '@fairys/valtio-form-basic';
import { FairysValtioFormLayoutContext, useFairysValtioFormLayoutAttrs } from '@fairys/valtio-form-basic';
export interface FormLayoutProps extends FairysValtioFormLayoutAttrsProps { }

export function FormLayout(props: FormLayoutProps) {
  const { children, title, extra } = props;
  const {
    formLayoutInstance,
    layoutName,
    layoutStyle,
    headerName,
    headerStyle,
    headerTitleName,
    headerExtraName,
    bodyName,
    bodyStyle,
  } = useFairysValtioFormLayoutAttrs(props);

  return (
    <FairysValtioFormLayoutContext.Provider value={formLayoutInstance}>
      <div className={layoutName} style={layoutStyle}>
        {title || extra ? (
          <div style={headerStyle} className={headerName}>
            <div className={headerTitleName}>{title}</div>
            <div className={headerExtraName}>{extra}</div>
          </div>
        ) : (
          <Fragment />
        )}
        <div className={bodyName} style={bodyStyle}>
          {children}
        </div>
      </div>
    </FairysValtioFormLayoutContext.Provider>
  );
}

```

### 表单组件

```tsx
import React from 'react';
import { FormLayout } from './layout';
import {
  useFairysValtioForm,
  FairysValtioFormInstanceContext,
  useFairysValtioFormInstance,
  useFairysValtioFormInstanceContext,
  useFairysValtioFormInstanceContextState,
  useFairysValtioFormInstanceContextHideState,
} from '@fairys/valtio-form-basic';
import type { FairysValtioFormAttrsProps, FairysValtioFormInstance, MObject } from '@fairys/valtio-form-basic';

export interface FormProps<T extends MObject<T> = Record<string, any>> extends FairysValtioFormAttrsProps<T> {}

function FormBase<T extends MObject<T> = Record<string, any>>(
  props: FormProps<T>,
  ref: React.Ref<FairysValtioFormInstance<T>>,
) {
  const {
    formInstance,
    children,
    colCount = 4,
    labelMode = 'top',
    errorLayout = 'bottom-left',
    itemBorderType = 'none',
    platform = 'pc',
    ...rest
  } = useFairysValtioForm(props, ref);
  return (
    <FairysValtioFormInstanceContext.Provider value={formInstance}>
      <FormLayout
        {...rest}
        colCount={colCount}
        labelMode={labelMode}
        itemBorderType={itemBorderType}
        errorLayout={errorLayout}
        platform={platform}
      >
        {children}
      </FormLayout>
    </FairysValtioFormInstanceContext.Provider>
  );
}
export const Form = React.forwardRef(FormBase)

```

### 表单项

```tsx
import { Fragment } from 'react';
import type { FairysValtioFormItemAttrsProps, MObject } from '@fairys/valtio-form-basic';
import {
  useFairysValtioFormItemAttrs,
  useFairysValtioFormInstanceContextHideState,
  useFairysValtioFormItemNoStyleAttrs,
  FairysValtioFormParentAttrsContext,
} from '@fairys/valtio-form-basic';

export interface FormItemProps<T extends MObject<T> = Record<string, any>>
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    FairysValtioFormItemAttrsProps {
  /**是否使用控制隐藏的表单项*/
  isHide?: boolean;
  /**是否使用无样式表单项*/
  noStyle?: boolean;
}

/**普通表单项*/
export function FormItemBase<T extends MObject<T> = Record<string, any>>(
  props: Omit<FormItemProps<T>, 'isHide' | 'noStyle'>,
) {
  const { label, extra, helpText } = props;
  const {
    itemClassName,
    itemStyle,
    containerClassName,
    itemLabelClassName,
    itemLabelStyle,
    itemBodyClassName,
    itemBodyStyle,
    itemInputClassName,
    itemExtraClassName,
    errorClassName,
    helpClassName,
    isInvalid,
    children,
    error,
    formAttrsNameInstance,
    id,
  } = useFairysValtioFormItemAttrs(props);

  return (
    <div className={itemClassName} style={itemStyle}>
      <div className={containerClassName}>
        {label ? (
          <label htmlFor={id} className={itemLabelClassName} style={itemLabelStyle}>
            {label}
          </label>
        ) : (
          <Fragment />
        )}
        <div className={itemBodyClassName} style={itemBodyStyle}>
          <FairysValtioFormParentAttrsContext.Provider value={formAttrsNameInstance}>
            <div className={itemInputClassName}>{children}</div>
          </FairysValtioFormParentAttrsContext.Provider>
          {extra ? <div className={itemExtraClassName}>{extra}</div> : <Fragment />}
        </div>
      </div>
      {helpText ? <div className={helpClassName}>{helpText}</div> : <Fragment />}
      {isInvalid ? <div className={errorClassName}>{error}</div> : <Fragment />}
    </div>
  );
}
/**控制隐藏的表单项*/
export function FormHideItem<T extends MObject<T> = Record<string, any>>(
  props: Omit<FormItemProps<T>, 'isHide' | 'noStyle'>,
) {
  const [state] = useFairysValtioFormInstanceContextHideState();
  const isHide = state[props.name];
  if (isHide) {
    return <Fragment />;
  }
  return <FormItemBase<T> {...props} />;
}

/**无样式表单项*/
export function FormItemNoStyle<T extends MObject<T> = Record<string, any>>(
  props: Omit<FormItemProps<T>, 'isHide' | 'noStyle'>,
) {
  const { children, formAttrsNameInstance } = useFairysValtioFormItemNoStyleAttrs(props);
  return (
    <FairysValtioFormParentAttrsContext.Provider value={formAttrsNameInstance}>
      {children}
    </FairysValtioFormParentAttrsContext.Provider>
  );
}

/**表单项基础组件(根据isHide和noStyle判断是否使用控制隐藏的表单项和无样式表单项)*/
export function FormItem<T extends MObject<T> = Record<string, any>>(props: FormItemProps<T>) {
  const { isHide, noStyle, ...rest } = props;
  if (isHide) {
    return <FormHideItem<T> {...rest} />;
  }
  if (noStyle) {
    return <FormItemNoStyle<T> {...rest} />;
  }
  return <FormItemBase<T> {...rest} />;
}

```