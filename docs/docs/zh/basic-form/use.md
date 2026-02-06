---
title: 使用基础表单组件
---

## 布局组件

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

## 表单组件

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

export interface FormProps<T extends MObject<T> = object> extends FairysValtioFormAttrsProps<T> {}

function FormBase<T extends MObject<T> = object>(
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

## 表单项

```tsx
import { Fragment } from 'react';
import type { FairysValtioFormItemAttrsProps, MObject } from '@fairys/valtio-form-basic';
import {
  useFairysValtioFormItemAttrs,
  useFairysValtioFormInstanceContextHideState,
  useFairysValtioFormItemNoStyleAttrs,
  FairysValtioFormParentAttrsContext,
} from '@fairys/valtio-form-basic';

export interface FormItemProps<T extends MObject<T> = object>
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    FairysValtioFormItemAttrsProps {
  /**是否使用控制隐藏的表单项*/
  isHide?: boolean;
  /**是否使用无样式表单项*/
  noStyle?: boolean;
}

/**普通表单项*/
export function FormItemBase<T extends MObject<T> = object>(
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
export function FormHideItem<T extends MObject<T> = object>(
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
export function FormItemNoStyle<T extends MObject<T> = object>(
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
export function FormItem<T extends MObject<T> = object>(props: FormItemProps<T>) {
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