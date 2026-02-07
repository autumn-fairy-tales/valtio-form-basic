import { FairysTaroValtioFormLayout } from './layout';
import { FairysTaroValtioFormItem, FairysTaroValtioFormHideItem, FairysTaroValtioFormItemBase } from './form.item';
import {
  useFairysValtioForm,
  FairysValtioFormInstanceContext,
  useFairysValtioFormInstance,
  useFairysValtioFormInstanceContext,
  useFairysValtioFormInstanceContextState,
  useFairysValtioFormInstanceContextHideState,
  useFairysValtioFormInstanceToState,
  useFairysValtioFormInstanceToHideState,
} from '@fairys/valtio-form-basic';
import type { FairysValtioFormAttrsProps, FairysValtioFormInstance, MObject } from '@fairys/valtio-form-basic';
import React from 'react';
export * from '@fairys/valtio-form-basic';
export * from './form.item';
export * from './layout';
export interface FairysTaroValtioFormProps<T extends MObject<T> = object> extends FairysValtioFormAttrsProps<T> {}

function FairysTaroValtioFormBase<T extends MObject<T> = object>(
  props: FairysTaroValtioFormProps<T>,
  ref: React.Ref<FairysValtioFormInstance<T>>,
) {
  const { formInstance, children, ...rest } = useFairysValtioForm(props, ref);
  return (
    <FairysValtioFormInstanceContext.Provider value={formInstance}>
      <FairysTaroValtioFormLayout {...rest}>{children}</FairysTaroValtioFormLayout>
    </FairysValtioFormInstanceContext.Provider>
  );
}

export const FairysTaroValtioForm = React.forwardRef(
  FairysTaroValtioFormBase,
) as unknown as typeof FairysTaroValtioFormBase & {
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
  /**传递表单实例获取状态*/
  useFormInstanceToState: typeof useFairysValtioFormInstanceToState;
  /**传递表单实例获取隐藏状态*/
  useFormInstanceToHideState: typeof useFairysValtioFormInstanceToHideState;
};
/**初始化实例*/
FairysTaroValtioForm.useForm = useFairysValtioFormInstance;
/**获取状态*/
FairysTaroValtioForm.useFormState = useFairysValtioFormInstanceContextState;
/**获取隐藏状态*/
FairysTaroValtioForm.useFormHideState = useFairysValtioFormInstanceContextHideState;
/**获取上下文实例*/
FairysTaroValtioForm.useFormInstance = useFairysValtioFormInstanceContext;
/**表单项基础组件*/
FairysTaroValtioForm.FormItemBase = FairysTaroValtioFormItemBase;
/**表单项*/
FairysTaroValtioForm.FormItem = FairysTaroValtioFormItem;
/**隐藏表单项组件*/
FairysTaroValtioForm.FormHideItem = FairysTaroValtioFormHideItem;
/**传递表单实例获取状态*/
FairysTaroValtioForm.useFormInstanceToState = useFairysValtioFormInstanceToState;
/**传递表单实例获取隐藏状态*/
FairysTaroValtioForm.useFormInstanceToHideState = useFairysValtioFormInstanceToHideState;
