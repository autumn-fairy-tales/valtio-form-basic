import type { FairysValtioFormItemAttrsProps } from 'form/form.item';
import type { MObject } from './interface';
import { useFairysValtioFormInstanceContextState } from './instance';
import { useFairysValtioFormAttrsName } from './hooks';
import { useEffect } from 'react';

/**
 * 处理表单表单项属性，隐藏表单项时移除数据值
 */
export function useFairysValtioFormItemHideAttrs<T extends MObject<T> = Record<string, any>>(
  props: FairysValtioFormItemAttrsProps<T>,
) {
  const { name, isJoinParentField = true, isHideRemoveValue = true } = props;
  const [, , formInstance] = useFairysValtioFormInstanceContextState<T>();
  const { name: _name } = useFairysValtioFormAttrsName({ name, isJoinParentField });
  useEffect(() => {
    return () => {
      if (isHideRemoveValue) {
        formInstance.removeValueByPaths(_name);
      }
    };
  }, []);
}
