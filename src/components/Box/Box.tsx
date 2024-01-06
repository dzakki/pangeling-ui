import * as React from 'react';
import type { ViewProps } from 'react-native';
import { View } from 'react-native';

export const Box: React.FC<ViewProps> = ({ children, ...rest }) => {
  return <View {...rest}>{children}</View>;
};
