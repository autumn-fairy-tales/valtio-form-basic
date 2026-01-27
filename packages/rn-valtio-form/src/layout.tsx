import { Fragment } from 'react';
import { View, Text } from 'react-native';
import type { FairysValtioFormLayoutAttrsProps } from 'hooks/layout';
import { FairysValtioFormLayoutContext, useFairysValtioFormLayoutAttrs } from 'hooks/layout';

export interface FairysRNValtioFormLayoutProps extends FairysValtioFormLayoutAttrsProps {}

export function FairysRNValtioFormLayout(props: FairysRNValtioFormLayoutProps) {
  const { children, title, extra } = props;
  const { formLayoutInstance, layoutStyle, headerStyle, bodyStyle, headerTitleStyle, headerExtraStyle } =
    useFairysValtioFormLayoutAttrs(props);
  return (
    <FairysValtioFormLayoutContext.Provider value={formLayoutInstance}>
      <View style={layoutStyle}>
        {title || extra ? (
          <View style={headerStyle}>
            <View>
              <Text style={headerTitleStyle}>{title}</Text>
            </View>
            <View>
              <Text style={headerExtraStyle}>{extra}</Text>
            </View>
          </View>
        ) : (
          <Fragment />
        )}
        <View style={bodyStyle}>{children}</View>
      </View>
    </FairysValtioFormLayoutContext.Provider>
  );
}
