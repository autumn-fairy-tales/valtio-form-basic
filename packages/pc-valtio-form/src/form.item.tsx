/**表单项*/

import { Fragment } from 'react';
import type { FairysValtioFormItemAttrsProps, MObject } from '@fairys/valtio-form-basic';
import {
  useFairysValtioFormItemAttrs,
  useFairysValtioFormInstanceContextHideState,
  useFairysValtioFormItemNoStyleAttrs,
  FairysValtioFormParentAttrsContext,
} from '@fairys/valtio-form-basic';

export interface FairysPCValtioFormItemProps<T extends MObject<T> = object>
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    FairysValtioFormItemAttrsProps {
  /**是否使用控制隐藏的表单项*/
  isHide?: boolean;
  /**是否使用无样式表单项*/
  noStyle?: boolean;
}

/**普通表单项*/
export function FairysPCValtioFormItemBase<T extends MObject<T> = object>(
  props: Omit<FairysPCValtioFormItemProps<T>, 'isHide' | 'noStyle'>,
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
export function FairysPCValtioFormHideItem<T extends MObject<T> = object>(
  props: Omit<FairysPCValtioFormItemProps<T>, 'isHide' | 'noStyle'>,
) {
  const [state] = useFairysValtioFormInstanceContextHideState();
  const isHide = state[props.name];
  if (isHide) {
    return <Fragment />;
  }
  return <FairysPCValtioFormItemBase<T> {...props} />;
}

/**无样式表单项*/
export function FairysPCValtioFormItemNoStyle<T extends MObject<T> = object>(
  props: Omit<FairysPCValtioFormItemProps<T>, 'isHide' | 'noStyle'>,
) {
  const { children, formAttrsNameInstance } = useFairysValtioFormItemNoStyleAttrs(props);
  return (
    <FairysValtioFormParentAttrsContext.Provider value={formAttrsNameInstance}>
      {children}
    </FairysValtioFormParentAttrsContext.Provider>
  );
}

/**表单项基础组件(根据isHide和noStyle判断是否使用控制隐藏的表单项和无样式表单项)*/
export function FairysPCValtioFormItem<T extends MObject<T> = object>(props: FairysPCValtioFormItemProps<T>) {
  const { isHide, noStyle, ...rest } = props;
  if (isHide) {
    return <FairysPCValtioFormHideItem<T> {...rest} />;
  }
  if (noStyle) {
    return <FairysPCValtioFormItemNoStyle<T> {...rest} />;
  }
  return <FairysPCValtioFormItemBase<T> {...rest} />;
}
