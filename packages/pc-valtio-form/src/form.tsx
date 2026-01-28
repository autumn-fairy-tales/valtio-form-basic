import { FairysPCValtioFormLayout } from './layout';
import { FairysPCValtioFormItem, FairysPCValtioFormHideItem, FairysPCValtioFormItemBase } from './form.item';
import {
  useFairysValtioForm,
  FairysValtioFormInstanceContext,
  useFairysValtioFormInstance,
  useFairysValtioFormInstanceContext,
  useFairysValtioFormInstanceContextState,
  useFairysValtioFormInstanceContextHideState,
} from '@fairys/valtio-form-basic';
import type { FairysValtioFormAttrsProps, MObject } from '@fairys/valtio-form-basic';
export * from '@fairys/valtio-form-basic';
export * from './form.item';
export * from './layout';
export interface FairysPCValtioFormProps<T extends MObject<T> = object> extends FairysValtioFormAttrsProps<T> {}

export function FairysPCValtioForm<T extends MObject<T> = object>(props: FairysPCValtioFormProps<T>) {
  const {
    formInstance,
    children,
    colCount = 4,
    labelMode = 'top',
    errorLayout = 'bottom-left',
    itemBorderType = 'none',
    platform = 'pc',
    ...rest
  } = useFairysValtioForm(props);
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
/**初始化实例*/
FairysPCValtioForm.useForm = useFairysValtioFormInstance;
/**获取状态*/
FairysPCValtioForm.useFormState = useFairysValtioFormInstanceContextState;
/**获取隐藏状态*/
FairysPCValtioForm.useFormHideState = useFairysValtioFormInstanceContextHideState;
/**获取上下文实例*/
FairysPCValtioForm.useFormInstance = useFairysValtioFormInstanceContext;
/**表单项基础组件*/
FairysPCValtioForm.FormItemBase = FairysPCValtioFormItemBase;
/**表单项*/
FairysPCValtioForm.FormItem = FairysPCValtioFormItem;
/**隐藏表单想*/
FairysPCValtioForm.FormHideItem = FairysPCValtioFormHideItem;
