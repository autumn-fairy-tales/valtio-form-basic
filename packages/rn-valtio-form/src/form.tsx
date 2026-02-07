import { FairysRNValtioFormLayout } from './layout';
import { FairysRNValtioFormItem, FairysRNValtioFormHideItem, FairysRNValtioFormItemBase } from './form.item';
import {
  FairysValtioFormInstanceContext,
  useFairysValtioFormInstance,
  useFairysValtioFormInstanceContext,
  useFairysValtioFormInstanceContextState,
  useFairysValtioFormInstanceContextHideState,
  useFairysValtioFormInstanceToState,
  useFairysValtioFormInstanceToHideState,
} from '@fairys/valtio-form-basic/esm/common';

import type { FairysValtioFormInstance, MObject } from '@fairys/valtio-form-basic/esm/common';
import type { FairysValtioFormAttrsProps } from 'hooks/form';
import { useFairysValtioForm } from 'hooks/form';
import React from 'react';

export interface FairysRNValtioFormProps<T extends MObject<T> = Record<string, any>>
  extends FairysValtioFormAttrsProps<T> {}

function FairysRNValtioFormBase<T extends MObject<T> = Record<string, any>>(
  props: FairysRNValtioFormProps<T>,
  ref: React.Ref<FairysValtioFormInstance<T>>,
) {
  const { formInstance, children, ...rest } = useFairysValtioForm(props, ref);
  return (
    <FairysValtioFormInstanceContext.Provider value={formInstance}>
      <FairysRNValtioFormLayout {...rest}>{children}</FairysRNValtioFormLayout>
    </FairysValtioFormInstanceContext.Provider>
  );
}

export const FairysRNValtioForm = React.forwardRef(
  FairysRNValtioFormBase,
) as unknown as typeof FairysRNValtioFormBase & {
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
  /**传递表单实例获取状态*/
  useFormInstanceToState: typeof useFairysValtioFormInstanceToState;
  /**传递表单实例获取隐藏状态*/
  useFormInstanceToHideState: typeof useFairysValtioFormInstanceToHideState;
};
/**初始化实例*/
FairysRNValtioForm.useForm = useFairysValtioFormInstance;
/**获取状态*/
FairysRNValtioForm.useFormState = useFairysValtioFormInstanceContextState;
/**获取隐藏状态*/
FairysRNValtioForm.useFormHideState = useFairysValtioFormInstanceContextHideState;
/**获取上下文实例*/
FairysRNValtioForm.useFormInstance = useFairysValtioFormInstanceContext;
/**表单项基础组件*/
FairysRNValtioForm.FormItemBase = FairysRNValtioFormItemBase;
/**表单项*/
FairysRNValtioForm.FormItem = FairysRNValtioFormItem;
/**隐藏表单想*/
FairysRNValtioForm.FormHideItem = FairysRNValtioFormHideItem;
/**传递表单实例获取状态*/
FairysRNValtioForm.useFormInstanceToState = useFairysValtioFormInstanceToState;
/**传递表单实例获取隐藏状态*/
FairysRNValtioForm.useFormInstanceToHideState = useFairysValtioFormInstanceToHideState;
