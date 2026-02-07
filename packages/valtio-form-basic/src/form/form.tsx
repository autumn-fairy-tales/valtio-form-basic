import { MObject } from 'common/interface';
import { FairysValtioFormInstance, useFairysValtioFormInstance } from 'common/instance';
import { useImperativeHandle, useMemo, type ReactNode, useEffect } from 'react';
import { FairysValtioFormLayoutAttrsProps } from './layout';
import { RuleItem } from 'async-validator';

export interface FairysValtioFormAttrsProps<T extends MObject<T> = Record<string, any>>
  extends FairysValtioFormLayoutAttrsProps {
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
export function useFairysValtioForm<T extends MObject<T> = Record<string, any>>(
  props: FairysValtioFormAttrsProps<T>,
  ref: React.Ref<FairysValtioFormInstance<T>>,
) {
  const { form, rules, formData, hideState, initFormDataType = 'deepCopy', onValuesChange, ...rest } = props;
  const formInstance = useFairysValtioFormInstance(form);
  /**表单规则*/
  formInstance.rules = rules;
  /**表单值改变时回调*/
  formInstance.onValuesChange = onValuesChange;
  /**初始化表单值*/
  useMemo(() => formInstance.ctor({ formData, hideState, initFormDataType }), []);
  useImperativeHandle(ref, () => formInstance);
  /**卸载清空所有数据*/
  useEffect(() => () => formInstance.clear(), []);
  return {
    ...rest,
    formInstance,
  };
}
