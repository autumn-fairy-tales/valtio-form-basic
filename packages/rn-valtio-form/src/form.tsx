import { FairysRNValtioFormLayout } from './layout';
import { FairysRNValtioFormItem, FairysRNValtioFormHideItem, FairysRNValtioFormItemBase } from './form.item';
import {
  FairysValtioFormInstanceContext,
  useFairysValtioFormInstance,
  useFairysValtioFormInstanceContext,
  useFairysValtioFormInstanceContextState,
  useFairysValtioFormInstanceContextHideState,
} from '@fairys/valtio-form-basic/esm/common';

import type { MObject } from '@fairys/valtio-form-basic/esm/common';
import type { FairysValtioFormAttrsProps } from 'hooks/form';
import { useFairysValtioForm } from 'hooks/form';

export interface FairysRNValtioFormProps<T extends MObject<T> = object> extends FairysValtioFormAttrsProps<T> {}

export function FairysRNValtioForm<T extends MObject<T> = object>(props: FairysRNValtioFormProps<T>) {
  const { formInstance, children, ...rest } = useFairysValtioForm(props);
  return (
    <FairysValtioFormInstanceContext.Provider value={formInstance}>
      <FairysRNValtioFormLayout {...rest}>{children}</FairysRNValtioFormLayout>
    </FairysValtioFormInstanceContext.Provider>
  );
}
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
