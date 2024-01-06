import * as React from 'react';
import type { TextProps as RNTextProps, TextStyle } from 'react-native';
import { Text as RNText, StyleSheet } from 'react-native';
import { colors } from '../../themes';
import { getFontFamily } from './helper';

interface TextProps extends RNTextProps {
  style?: TextStyle;
}

export const Text: React.FC<TextProps> = ({
  style = {},
  children,
  ...rest
}) => {
  return (
    <RNText
      style={Object.assign(
        {
          fontFamily: getFontFamily(
            (style?.fontFamily ?? 'normal') as TextStyle['fontWeight']
          ),
        },
        styles.text,
        style
      )}
      {...rest}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.black,
  },
});
