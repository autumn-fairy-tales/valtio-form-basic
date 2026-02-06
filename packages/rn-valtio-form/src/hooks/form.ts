import type { MObject } from '@fairys/valtio-form-basic/esm/common';
import { FairysValtioFormInstance, useFairysValtioFormInstance } from '@fairys/valtio-form-basic/esm/common';
import { useMemo, type ReactNode, useImperativeHandle, useEffect } from 'react';
import { FairysValtioFormLayoutAttrsProps } from './layout';
import { RuleItem } from 'async-validator';

export interface FairysValtioFormAttrsProps<T extends MObject<T> = object> extends FairysValtioFormLayoutAttrsProps {
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
 */
export function useFairysValtioForm<T extends MObject<T> = object>(
  props: FairysValtioFormAttrsProps<T>,
  ref: React.Ref<FairysValtioFormInstance<T>>,
) {
  const { form, rules, formData, hideState, initFormDataType = 'deepCopy', ...rest } = props;
  const formInstance = useFairysValtioFormInstance(form);
  /**表单规则*/
  formInstance.rules = rules;
  /**初始化表单值*/
  useMemo(() => formInstance.ctor({ formData, hideState, initFormDataType }), []);
  useImperativeHandle(ref, () => formInstance);
  /**卸载清空所有数据*/
  useEffect(() => () => formInstance.clear(), []);
  return {
    ...rest,
    formInstance,
  } as Omit<FairysValtioFormAttrsProps<T>, 'initFormDataType' | 'form' | 'rules' | 'formData' | 'hideState'> & {
    formInstance: FairysValtioFormInstance<T>;
  };
}
