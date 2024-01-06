import * as React from 'react';
import type { TextProps } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { colors, fonts } from '../../themes';

interface TitleProps extends TextProps {
  level?: 1 | 2 | 3 | 4 | 5;
}

export const Title: React.FC<TitleProps> = ({
  level = 1,
  children,
  style = {},
  ...rest
}) => {
  return (
    <Text style={[styles.title, styles[`title-${level}`], style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  'title': {
    color: colors.black,
    fontWeight: '700',
    fontFamily: fonts['Gellix-Bold'],
  },
  'title-1': {
    fontSize: 32,
  },
  'title-2': {
    fontSize: 28,
  },
  'title-3': {
    fontSize: 22,
  },
  'title-4': {
    fontSize: 18,
  },
  'title-5': {
    fontSize: 14,
  },
});
