import { Fragment } from 'react';
import type { FairysValtioFormLayoutAttrsProps } from '@fairys/valtio-form-basic';
import { FairysValtioFormLayoutContext, useFairysValtioFormLayoutAttrs } from '@fairys/valtio-form-basic';
export interface FairysPCValtioFormLayoutProps extends FairysValtioFormLayoutAttrsProps { }

export function FairysPCValtioFormLayout(props: FairysPCValtioFormLayoutProps) {
  const { children, title, extra } = props;

  const {
    formLayoutInstance,
    layoutName,
    layoutStyle,
    headerName,
    headerStyle,
    headerTitleName,
    headerExtraName,
    bodyName,
    bodyStyle,
  } = useFairysValtioFormLayoutAttrs(props);

  return (
    <FairysValtioFormLayoutContext.Provider value={formLayoutInstance}>
      <div className={layoutName} style={layoutStyle}>
        {title || extra ? (
          <div style={headerStyle} className={headerName}>
            <div className={headerTitleName}>{title}</div>
            <div className={headerExtraName}>{extra}</div>
          </div>
        ) : (
          <Fragment />
        )}
        <div className={bodyName} style={bodyStyle}>
          {children}
        </div>
      </div>
    </FairysValtioFormLayoutContext.Provider>
  );
}
