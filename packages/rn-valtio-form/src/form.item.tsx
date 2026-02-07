/**表单项*/

import { View, Text } from 'react-native';
import type { ViewProps } from 'react-native';
import { Fragment } from 'react';
import type { MObject } from '@fairys/valtio-form-basic';
import {
  useFairysValtioFormInstanceContextHideState,
  FairysValtioFormParentAttrsContext,
} from '@fairys/valtio-form-basic/esm/common';
import { formItemStyles } from './styles/form.item';
import type { FairysValtioFormItemAttrsProps } from './hooks/form.item';
import { useFairysValtioFormItemAttrs, useFairysValtioFormItemNoStyleAttrs } from 'hooks/form.item';

export interface FairysRNValtioFormItemProps<T extends MObject<T> = Record<string, any>>
  extends Omit<ViewProps, 'style'>,
    FairysValtioFormItemAttrsProps<T> {
  /**是否使用控制隐藏的表单项*/
  isHide?: boolean;
  /**是否使用无样式表单项*/
  noStyle?: boolean;
}

/**普通表单项*/
export function FairysRNValtioFormItemBase<T extends MObject<T> = Record<string, any>>(
  props: Omit<FairysRNValtioFormItemProps<T>, 'isHide' | 'noStyle'>,
) {
  const { label, extra, helpText } = props;
  const {
    itemStyle,
    itemContainerStyle,
    itemLabelStyle,
    itemLabelTextStyle,
    itemLabelShowColonStyle,
    itemExtraStyle,
    itemInputStyle,
    itemBodyStyle,
    isInvalid,
    isRequired,
    showColon,
    formAttrsNameInstance,
    itemBorderType,
    errorStyle,
    helpStyle,
    error,
    children,
  } = useFairysValtioFormItemAttrs(props);
  return (
    <View style={itemStyle}>
      <View style={itemContainerStyle}>
        {label ? (
          <View style={itemLabelStyle}>
            {isRequired ? (
              <Text style={formItemStyles['fairys-valtio-form-item-label.required']}>*</Text>
            ) : (
              <Fragment />
            )}
            <Text style={itemLabelTextStyle}>{label}</Text>
            {showColon ? <Text style={itemLabelShowColonStyle}>:</Text> : <Fragment />}
          </View>
        ) : (
          <Fragment />
        )}
        <View style={itemBodyStyle}>
          <FairysValtioFormParentAttrsContext.Provider value={formAttrsNameInstance}>
            <View style={itemInputStyle}>{children}</View>
          </FairysValtioFormParentAttrsContext.Provider>
          {extra ? (
            <View style={itemExtraStyle}>
              <Text style={formItemStyles['fairys-valtio-form-item-body-extra-text']}>{extra}</Text>
            </View>
          ) : (
            <Fragment />
          )}
          {itemBorderType === 'body' && isInvalid ? (
            <View style={errorStyle}>
              <Text style={formItemStyles['fairys-valtio-form-item-body-error-text']}>{error}</Text>
            </View>
          ) : (
            <Fragment />
          )}
        </View>
      </View>
      {helpText ? (
        <View style={helpStyle}>
          <Text>{helpText}</Text>
        </View>
      ) : (
        <Fragment />
      )}
      {isInvalid && itemBorderType !== 'body' ? (
        <View style={errorStyle}>
          <Text style={formItemStyles['fairys-valtio-form-item-body-error-text']}>{error}</Text>
        </View>
      ) : (
        <Fragment />
      )}
    </View>
  );
}
/**控制隐藏的表单项*/
export function FairysRNValtioFormHideItem<T extends MObject<T> = Record<string, any>>(
  props: Omit<FairysRNValtioFormItemProps<T>, 'isHide' | 'noStyle'>,
) {
  const [state] = useFairysValtioFormInstanceContextHideState();
  const isHide = state[props.name];
  if (isHide) {
    return <Fragment />;
  }
  return <FairysRNValtioFormItemBase<T> {...props} />;
}

/**无样式表单项*/
export function FairysRNValtioFormItemNoStyle<T extends MObject<T> = Record<string, any>>(
  props: Omit<FairysRNValtioFormItemProps<T>, 'isHide' | 'noStyle'>,
) {
  const { children, formAttrsNameInstance } = useFairysValtioFormItemNoStyleAttrs(props);
  return (
    <FairysValtioFormParentAttrsContext.Provider value={formAttrsNameInstance}>
      {children}
    </FairysValtioFormParentAttrsContext.Provider>
  );
}

/**表单项基础组件(根据isHide和noStyle判断是否使用控制隐藏的表单项和无样式表单项)*/
export function FairysRNValtioFormItem<T extends MObject<T> = Record<string, any>>(
  props: FairysRNValtioFormItemProps<T>,
) {
  const { isHide, noStyle, ...rest } = props;
  if (isHide) {
    return <FairysRNValtioFormHideItem<T> {...rest} />;
  }
  if (noStyle) {
    return <FairysRNValtioFormItemNoStyle<T> {...rest} />;
  }
  return <FairysRNValtioFormItemBase<T> {...rest} />;
}
