import { FairysPCValtioFormLayout } from './layout';
import { FairysPCValtioFormItem, FairysPCValtioFormHideItem, FairysPCValtioFormItemBase } from './form.item';
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
export interface FairysPCValtioFormProps<T extends MObject<T> = Record<string, any>>
  extends FairysValtioFormAttrsProps<T> {}

function FairysPCValtioFormBase<T extends MObject<T> = Record<string, any>>(
  props: FairysPCValtioFormProps<T>,
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
      <FairysPCValtioFormLayout
        {...rest}
        colCount={colCount}
        labelMode={labelMode}
        itemBorderType={itemBorderType}
        errorLayout={errorLayout}
        platform={platform}
      >
        {children}
      </FairysPCValtioFormLayout>
    </FairysValtioFormInstanceContext.Provider>
  );
}

export const FairysPCValtioForm = React.forwardRef(
  FairysPCValtioFormBase,
) as unknown as typeof FairysPCValtioFormBase & {
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
  /**传递表单实例获取状态*/
  useFormInstanceToState: typeof useFairysValtioFormInstanceToState;
  /**传递表单实例获取隐藏状态*/
  useFormInstanceToHideState: typeof useFairysValtioFormInstanceToHideState;
};
/**初始化实例*/
FairysPCValtioForm.useForm = useFairysValtioFormInstance;
/**获取状态*/
FairysPCValtioForm.useFormState = useFairysValtioFormInstanceContextState;
/**获取隐藏状态*/
FairysPCValtioForm.useFormHideState = useFairysValtioFormInstanceContextHideState;
/**获取上下文实例*/
FairysPCValtioForm.useFormInstance = useFairysValtioFormInstanceContext;
/**传递表单实例获取状态*/
FairysPCValtioForm.useFormInstanceToState = useFairysValtioFormInstanceToState;
/**传递表单实例获取隐藏状态*/
FairysPCValtioForm.useFormInstanceToHideState = useFairysValtioFormInstanceToHideState;
/**表单项基础组件*/
FairysPCValtioForm.FormItemBase = FairysPCValtioFormItemBase;
/**表单项*/
FairysPCValtioForm.FormItem = FairysPCValtioFormItem;
/**隐藏表单想*/
FairysPCValtioForm.FormHideItem = FairysPCValtioFormHideItem;
