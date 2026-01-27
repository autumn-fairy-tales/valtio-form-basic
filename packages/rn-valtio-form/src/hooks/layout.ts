import { createContext, useContext, useMemo, useRef } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { ViewProps, StyleSheet } from 'react-native';
import type { FairysValtioFormLayoutContextOptions as _FairysValtioFormLayoutContextOptions } from '@fairys/valtio-form-basic';
import { layoutStyles } from 'styles/layout';

export interface FairysValtioFormLayoutContextOptions
  extends Omit<
    _FairysValtioFormLayoutContextOptions,
    | 'formItemStyle'
    | 'formItemLabelStyle'
    | 'formItemBodyStyle'
    | 'formItemClassName'
    | 'formItemLabelClassName'
    | 'formItemBodyClassName'
    | ''
  > {
  /**表单项 style*/
  formItemStyle?: ViewProps['style'];
  /**表单项 label  style*/
  formItemLabelStyle?: ViewProps['style'];
  /**表单项 body  style*/
  formItemBodyStyle?: ViewProps['style'];
}

export interface FairysValtioFormLayoutAttrsProps extends FairysValtioFormLayoutContextOptions {
  /**
   * @description gap 属性是用来设置网格行与列之间的间隙，该属性是row-gap and column-gap的简写形式。
   */
  gap?: string | number;
  /**标题*/
  title?: React.ReactNode;
  /**额外内容*/
  extra?: React.ReactNode;
  /**内容*/
  children?: React.ReactNode;
  /**布局样式*/
  style?: ViewProps['style'];
  /**头部样式*/
  headerStyle?: ViewProps['style'];
  headerTextStyle?: ViewProps['style'];
  /**额外内容样式*/
  headerExtraStyle?: ViewProps['style'];
  /**内容样式*/
  bodyStyle?: ViewProps['style'];
  /**是否边框*/
  bordered?: boolean;
}

export class FairysValtioFormLayoutInstance {
  state = proxy<FairysValtioFormLayoutContextOptions>({
    colCount: 1,
    errorLayout: 'bottom-right',
    labelMode: 'between',
    itemBorderType: 'bottom',
  });
  updated = (options: FairysValtioFormLayoutContextOptions = {}) => {
    const keys = Object.keys(options);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      this.state[key] = options[key];
    }
  };
}

export const useFairysValtioFormLayoutInstance = (instance?: FairysValtioFormLayoutInstance) => {
  const ref = useRef<FairysValtioFormLayoutInstance>();
  if (!ref.current) {
    if (instance) {
      ref.current = instance;
    } else {
      ref.current = new FairysValtioFormLayoutInstance();
    }
  }
  return ref.current;
};

export const FairysValtioFormLayoutContext = createContext<FairysValtioFormLayoutInstance>(
  new FairysValtioFormLayoutInstance(),
);

export const useFairysValtioFormLayoutContext = () => {
  const instance = useContext(FairysValtioFormLayoutContext);
  const state = useSnapshot(instance.state);
  return [state, instance] as const;
};

/**
 * 布局属性处理
 * 
 * @example
 * 
 * ```tsx

  ```
 * 
*/
export function useFairysValtioFormLayoutAttrs(props: FairysValtioFormLayoutAttrsProps) {
  const formLayoutInstance = useFairysValtioFormLayoutInstance();
  const [state] = useFairysValtioFormLayoutContext();
  const parent_colCount = state.colCount || 1;
  const parent_errorLayout = state.errorLayout || 'bottom-right';
  const parent_labelMode = state.labelMode || 'between';
  const parent_formItemStyle = state.formItemStyle;
  const parent_formItemLabelStyle = state.formItemLabelStyle;
  const parent_formItemBodyStyle = state.formItemBodyStyle;
  const parent_borderedType = state.itemBorderType || 'bottom';
  const parent_itemBorderColor = state.itemBorderColor;
  const parent_isInvalidBorderRed = state.isInvalidBorderRed;
  const parent_isInvalidTextRed = state.isInvalidTextRed;
  const parent_showColon = state.showColon;

  const {
    colCount = parent_colCount,
    errorLayout = parent_errorLayout,
    labelMode = parent_labelMode,
    formItemStyle = parent_formItemStyle,
    formItemLabelStyle = parent_formItemLabelStyle,
    formItemBodyStyle = parent_formItemBodyStyle,
    itemBorderType = parent_borderedType,
    itemBorderColor = parent_itemBorderColor,
    isInvalidBorderRed = parent_isInvalidBorderRed,
    isInvalidTextRed = parent_isInvalidTextRed,
    showColon = parent_showColon,
    gap,
    style,
    headerStyle,
    headerTextStyle,
    headerExtraStyle,
    bodyStyle,
    bordered,
  } = props;

  useMemo(
    () =>
      formLayoutInstance.updated({
        colCount,
        errorLayout,
        labelMode,
        formItemStyle,
        formItemLabelStyle,
        formItemBodyStyle,
        itemBorderType,
        itemBorderColor,
        isInvalidBorderRed,
        isInvalidTextRed,
        showColon,
      } as FairysValtioFormLayoutContextOptions),
    [
      colCount,
      errorLayout,
      labelMode,
      formItemStyle,
      formItemLabelStyle,
      formItemBodyStyle,
      itemBorderType,
      itemBorderColor,
      isInvalidBorderRed,
      isInvalidTextRed,
      showColon,
    ],
  );

  const _layoutStyle = useMemo(
    () => [
      StyleSheet.flatten([
        layoutStyles['fairys-valtio-form-layout'],
        bordered && layoutStyles['fairys-valtio-form-layout.bordered'],
        style,
      ]),
    ],
    [bordered, style],
  );

  const _headerStyle = useMemo(
    () => [StyleSheet.flatten([layoutStyles['fairys-valtio-form-layout-header'], headerStyle])],
    [headerStyle],
  );

  const _headerTitleStyle = useMemo(
    () => [StyleSheet.flatten([layoutStyles['fairys-valtio-form-layout-header-title'], headerTextStyle])],
    [headerTextStyle],
  );

  const _headerExtraStyle = useMemo(
    () => [StyleSheet.flatten([layoutStyles['fairys-valtio-form-layout-header-extra'], headerExtraStyle])],
    [headerExtraStyle],
  );

  const _bodyStyle = useMemo(
    () => [StyleSheet.flatten([layoutStyles['fairys-valtio-form-layout-body'], bodyStyle])],
    [bodyStyle],
  );

  const styleBase = useMemo(() => {
    const css: ViewProps['style'] = {};
    if (typeof gap === 'string') {
      css.gap = Number(gap);
    }
    if (typeof gap === 'number') {
      css.gap = gap;
    }
    return css;
  }, [colCount, gap]);

  return {
    colCount,
    errorLayout,
    labelMode,
    itemBorderType,
    formLayoutInstance,
    //======================
    layoutStyle: _layoutStyle,
    //======================
    headerStyle: _headerStyle,
    headerTitleStyle: _headerTitleStyle,
    headerExtraStyle: _headerExtraStyle,
    //======================
    bodyStyle: StyleSheet.flatten([styleBase, _bodyStyle]),
  } as FairysValtioFormLayoutAttrsReturn;
}

export interface FairysValtioFormLayoutAttrsReturn {
  /**列数*/
  colCount: number;
  /**规则校验失败错误提示位置*/
  errorLayout: string;
  /**
   * label显示模式
   * @platform RN 支持 between
   */
  labelMode: string;
  /**
   * 底部边框类型
   */
  itemBorderType: string;
  /**表单布局实例*/
  formLayoutInstance: FairysValtioFormLayoutInstance;
  /**布局样式*/
  layoutStyle: ViewProps['style'];
  /**头部样式*/
  headerStyle: ViewProps['style'];
  /**头部标题样式*/
  headerTitleStyle: ViewProps['style'];
  /**头部额外内容样式*/
  headerExtraStyle: ViewProps['style'];
  /**内容样式*/
  bodyStyle: ViewProps['style'];
}
