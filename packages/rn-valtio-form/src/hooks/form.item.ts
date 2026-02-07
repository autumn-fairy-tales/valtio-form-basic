/**表单项*/
import React, { useEffect, useMemo } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import type {
  MObject,
  FairysValtioFormItemAttrsProps as _FairysValtioFormItemAttrsProps,
} from '@fairys/valtio-form-basic';
import {
  useFairysValtioFormInstanceContextState,
  FairysValtioFormInstance,
  get,
  formatePath,
  FairysValtioFormParentAttrs,
  useFairysValtioFormAttrsName,
  useId,
} from '@fairys/valtio-form-basic/esm/common';
import { formItemStyles } from 'styles/form.item';
import { FairysValtioFormLayoutContextOptions, useFairysValtioFormLayoutContext } from './layout';

export interface FairysValtioFormItemAttrsProps<T extends MObject<T> = object>
  extends Omit<
    _FairysValtioFormItemAttrsProps<T>,
    'style' | 'labelStyle' | 'bodyStyle' | 'rowSpan' | 'className' | 'labelClassName' | 'bodyClassName'
  > {
  // 基础样式
  /**表单项样式*/
  style?: ViewProps['style'];
  /**表单项标签样式*/
  labelStyle?: ViewProps['style'];
  /**表单项主体样式*/
  bodyStyle?: ViewProps['style'];
}

/**
 * 处理表单表单项属性
 *
 */
export function useFairysValtioFormItemAttrs<T extends MObject<T> = object>(props: FairysValtioFormItemAttrsProps<T>) {
  const [layoutAttrs] = useFairysValtioFormLayoutContext();
  const colCount = layoutAttrs.colCount || 1;
  const parent_borderedType = layoutAttrs.itemBorderType || 'bottom';
  const parent_errorLayout = layoutAttrs.errorLayout || 'bottom-right';
  const parent_formItemLabelStyle = layoutAttrs.formItemLabelStyle;
  const parent_formItemStyle = layoutAttrs.formItemStyle;
  const parent_formItemBodyStyle = layoutAttrs.formItemBodyStyle;
  const parent_labelMode = layoutAttrs.labelMode || 'between';
  const parent_itemBorderColor = layoutAttrs.itemBorderColor;
  const parent_isInvalidBorderRed = layoutAttrs.isInvalidBorderRed;
  const parent_isInvalidTextRed = layoutAttrs.isInvalidTextRed;
  const parent_showColon = layoutAttrs.showColon;

  const {
    name,
    valuePropName = 'value',
    getValuePath = 'text',
    getValueFromEvent,
    formatValue,
    onAfterUpdate,
    trigger = 'onChange',
    style,
    labelStyle,
    bodyStyle,
    children,
    labelMode = parent_labelMode,
    errorLayout = parent_errorLayout,
    colSpan = 1,
    isRequired: _isRequired,
    itemBorderType = parent_borderedType,
    attrs = {},
    showColon = parent_showColon,
    itemBorderColor = parent_itemBorderColor,
    isInvalidBorderRed = parent_isInvalidBorderRed,
    isInvalidTextRed = parent_isInvalidTextRed,
    isJoinParentField = true,
    rules,
    isRemoveValueOnUnmount = true,
  } = props;
  const {
    name: _name,
    paths,
    parentName,
    formAttrsNameInstance,
  } = useFairysValtioFormAttrsName({ name, isJoinParentField });

  const widthStyles: ViewProps['style'] = useMemo(() => {
    if (colCount >= colSpan) {
      return {
        width: `${(100 / colCount) * colSpan}%`,
      };
    }
    return { width: `100%` };
  }, [colSpan, colCount]);

  const [state, errorState, formInstance] = useFairysValtioFormInstanceContextState<T>();
  const value = useMemo(() => get(state, paths), [state, paths]);

  const error = errorState[_name];
  // 使用从 Form 中设置的规则
  const _formItemRules = formInstance.rules?.[_name];
  const id = useId(_name);
  formInstance.nameToPaths[_name] = paths;

  useEffect(() => {
    if (Array.isArray(rules) && rules.length) {
      formInstance.mountRules[_name] = rules;
    }
    return () => {
      formInstance.removeRules(_name);
    };
  }, [_name, rules]);

  useEffect(() => {
    return () => {
      if (isRemoveValueOnUnmount) {
        formInstance.removeValueByPaths(_name);
      }
    };
  }, []);

  const onValueChange = (event: any) => {
    let newValue = event;
    const target = event?.nativeEvent;
    if (typeof getValueFromEvent === 'function') {
      newValue = getValueFromEvent(event, formInstance);
    } else if (event && target && typeof target === 'object' && getValuePath in target) {
      newValue = get(target, formatePath(getValuePath));
    }
    if (typeof formatValue === 'function') {
      newValue = formatValue(newValue, formInstance, event);
    }
    if (newValue === value) return;
    formInstance.updatedValueByPaths(_name, newValue);
    if (typeof onAfterUpdate === 'function') {
      onAfterUpdate(newValue, formInstance, event);
    }
  };

  /**基础组件参数*/
  const baseControl = {
    ...attrs,
    style: StyleSheet.flatten([attrs?.style || {}, labelMode === 'between' ? formItemStyles['input.between'] : {}]),
    name,
    id,
    [valuePropName]: value,
    [trigger]: onValueChange,
  };

  /**判断是否必填*/
  const isRequired = useMemo(() => {
    if (_isRequired) {
      return _isRequired;
    } else if (Array.isArray(rules) && rules.length) {
      return rules.some((rule) => rule.required);
    } else if (_formItemRules && Array.isArray(_formItemRules) && _formItemRules.length) {
      return _formItemRules.some((rule) => rule.required);
    }
    return false;
  }, [rules, formInstance, _formItemRules]);

  /**校验是否存在错误信息*/
  const isInvalid = useMemo(() => {
    if (Array.isArray(error) && error.length) {
      return true;
    }
    return false;
  }, [error]);

  const item_style = useMemo(() => {
    return StyleSheet.flatten([
      formItemStyles['fairys-valtio-form-item'],
      itemBorderType === 'bottom' ? formItemStyles['fairys-valtio-form-item.border-bottom'] : {},
      itemBorderColor && itemBorderType === 'bottom' ? { borderColor: itemBorderColor } : {},
      isInvalid && isInvalidBorderRed && itemBorderType === 'bottom'
        ? formItemStyles['fairys-valtio-form-item.border-bottom.red']
        : {},
      widthStyles,
      parent_formItemStyle,
      style,
    ]);
  }, [
    style,
    widthStyles,
    parent_formItemStyle,
    labelMode,
    itemBorderType,
    isInvalid,
    isInvalidBorderRed,
  ]) as ViewProps['style'];

  const itemContainer_style = useMemo(() => {
    return StyleSheet.flatten([
      formItemStyles['fairys-valtio-form-item-container'],
      labelMode === 'between' ? formItemStyles['fairys-valtio-form-item-container.between'] : {},
      labelMode === 'top' ? formItemStyles['fairys-valtio-form-item-container.top'] : {},
      labelMode === 'left' ? formItemStyles['fairys-valtio-form-item-container.left'] : {},
    ]);
  }, [labelMode]) as ViewProps['style'];

  const itemLabel_style = useMemo(() => {
    return StyleSheet.flatten([
      formItemStyles['fairys-valtio-form-item-label'],
      labelMode === 'left' ? formItemStyles['fairys-valtio-form-item-label.left'] : {},
      parent_formItemLabelStyle,
      labelStyle,
    ]);
  }, [labelMode, parent_formItemLabelStyle, labelStyle]) as ViewProps['style'];

  const itemLabelShowColon_style = useMemo(() => {
    return StyleSheet.flatten([
      formItemStyles['fairys-valtio-form-item-label.show-colon'],
      isInvalid && isInvalidTextRed ? formItemStyles['fairys-valtio-form-item-label.show-colon.red'] : {},
    ]);
  }, [isInvalid, isInvalidTextRed]) as ViewProps['style'];

  const itemLabelText_style = useMemo(() => {
    return StyleSheet.flatten([
      formItemStyles['fairys-valtio-form-item-label-text'],
      isInvalid && isInvalidTextRed ? formItemStyles['fairys-valtio-form-item-label-text.red'] : {},
    ]);
  }, [labelMode, isInvalid, isInvalidTextRed]) as ViewProps['style'];

  const itemBody_style = useMemo(() => {
    return StyleSheet.flatten([
      formItemStyles['fairys-valtio-form-item-body'],
      labelMode === 'left' ? formItemStyles['fairys-valtio-form-item-body.left'] : {},
      labelMode === 'top' ? formItemStyles['fairys-valtio-form-item-body.top'] : {},
      labelMode === 'between' ? formItemStyles['fairys-valtio-form-item-body.between'] : {},
      itemBorderType === 'body' ? formItemStyles['fairys-valtio-form-item-body.border-bottom'] : {},
      itemBorderColor && itemBorderType === 'body' ? { borderColor: itemBorderColor } : {},
      isInvalid && isInvalidBorderRed && itemBorderType === 'body'
        ? formItemStyles['fairys-valtio-form-item-body.border-bottom.red']
        : {},
      parent_formItemBodyStyle,
      bodyStyle,
    ]);
  }, [bodyStyle, parent_formItemBodyStyle, labelMode, isInvalid]) as ViewProps['style'];

  const itemBodyInput_style = useMemo(() => {
    return StyleSheet.flatten([
      formItemStyles['fairys-valtio-form-item-body-input'],
      labelMode === 'between' ? formItemStyles['fairys-valtio-form-item-body-input.between'] : {},
      labelMode !== 'between' ? formItemStyles['fairys-valtio-form-item-body-input.not.between'] : {},
    ]);
  }, [labelMode]) as ViewProps['style'];

  const itemExtra_style = useMemo(() => {
    return StyleSheet.flatten([formItemStyles['fairys-valtio-form-item-body-extra']]);
  }, []) as ViewProps['style'];

  const itemHelp_style = useMemo(() => {
    return StyleSheet.flatten([formItemStyles['fairys-valtio-form-item-help']]);
  }, []) as ViewProps['style'];

  const itemError_style = useMemo(() => {
    return StyleSheet.flatten([
      formItemStyles['fairys-valtio-form-item-body-error'],
      errorLayout ? formItemStyles['fairys-valtio-form-item-body-error.' + errorLayout] || {} : {},
    ]);
  }, [errorLayout]) as ViewProps['style'];

  return {
    value,
    isInvalid,
    itemBorderType,
    onValueChange,
    colSpan,
    colCount,
    labelMode,
    errorLayout,
    isRequired,
    state,
    errorState,
    formInstance,
    error,
    _name,
    name,
    id,
    paths,
    parentName,
    formAttrsNameInstance,
    showColon,
    // ================================================================================
    itemStyle: item_style,
    itemContainerStyle: itemContainer_style,
    itemLabelStyle: itemLabel_style,
    itemLabelTextStyle: itemLabelText_style,
    itemLabelShowColonStyle: itemLabelShowColon_style,
    itemBodyStyle: itemBody_style,
    itemInputStyle: itemBodyInput_style,
    itemExtraStyle: itemExtra_style,
    errorStyle: itemError_style,
    helpStyle: itemHelp_style,
    children: React.isValidElement(children) ? React.cloneElement(children, { ...baseControl }) : children,
  } as FairysValtioFormItemAttrsReturn<T>;
}

export interface FairysValtioFormItemAttrsReturn<T extends MObject<T> = object> {
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
  // =========================================
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
export function useFairysValtioFormItemNoStyleAttrs<T extends MObject<T> = object>(
  props: FairysValtioFormItemAttrsProps<T>,
) {
  const {
    name,
    valuePropName = 'value',
    getValuePath = 'text',
    getValueFromEvent,
    formatValue,
    onAfterUpdate,
    trigger = 'onChange',
    children,
    attrs = {},
    isJoinParentField = true,
    rules,
    isRequired: _isRequired,
    isRemoveValueOnUnmount = true,
  } = props;
  const [state, errorState, formInstance] = useFairysValtioFormInstanceContextState<T>();
  const {
    name: _name,
    paths,
    parentName,
    formAttrsNameInstance,
  } = useFairysValtioFormAttrsName({ name, isJoinParentField });
  const id = useId(_name);
  const value = useMemo(() => get(state, paths), [state, paths]);
  const error = errorState[_name];
  formInstance.nameToPaths[_name] = paths;

  // 使用从 Form 中设置的规则
  const _formItemRules = formInstance.rules?.[_name];

  useEffect(() => {
    if (Array.isArray(rules) && rules.length) {
      formInstance.mountRules[_name] = rules;
    }
    return () => {
      formInstance.removeRules(_name);
    };
  }, [_name, rules]);
  useEffect(() => {
    return () => {
      if (isRemoveValueOnUnmount) {
        formInstance.removeValueByPaths(_name);
      }
    };
  }, []);
  const onValueChange = (event: any) => {
    let newValue = event;
    const target = event?.nativeEvent;
    if (typeof getValueFromEvent === 'function') {
      newValue = getValueFromEvent(event, formInstance);
    } else if (event && target && typeof target === 'object' && getValuePath in target) {
      newValue = get(target, formatePath(getValuePath));
    }
    if (typeof formatValue === 'function') {
      newValue = formatValue(newValue, formInstance, event);
    }
    if (newValue === value) return;
    formInstance.updatedValueByPaths(_name, newValue);
    if (typeof onAfterUpdate === 'function') {
      onAfterUpdate(newValue, formInstance, event);
    }
  };
  /**基础组件参数*/
  const baseControl = {
    ...attrs,
    name,
    id,
    [valuePropName]: value,
    [trigger]: onValueChange,
  };

  /**判断是否必填*/
  const isRequired = useMemo(() => {
    if (_isRequired) {
      return _isRequired;
    } else if (Array.isArray(rules) && rules.length) {
      return rules.some((rule) => rule.required);
    } else if (_formItemRules && Array.isArray(_formItemRules) && _formItemRules.length) {
      return _formItemRules.some((rule) => rule.required);
    }
    return false;
  }, [rules, formInstance, _formItemRules]);

  /**校验是否存在错误信息*/
  const isInvalid = useMemo(() => {
    if (Array.isArray(error) && error.length) {
      return true;
    }
    return false;
  }, [error]);

  return {
    value,
    isRequired,
    isInvalid,
    error,
    onValueChange,
    state,
    errorState,
    formInstance,
    _name,
    name,
    id,
    paths,
    parentName,
    formAttrsNameInstance,
    children: React.isValidElement(children) ? React.cloneElement(children, { ...baseControl }) : children,
  } as FairysValtioFormItemNoStyleAttrsReturn<T>;
}

export interface FairysValtioFormItemNoStyleAttrsReturn<T extends MObject<T> = object> {
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
