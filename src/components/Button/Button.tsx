import * as React from 'react';
import type {
  TouchableOpacityProps,
  StyleProp,
  TextProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes';
import renderNode from '../../utilities/render-node';

const ButtonTypes = ['default', 'primary', 'link', 'text'] as const;
export type ButtonType = (typeof ButtonTypes)[number];

export interface ButtonProps extends TouchableOpacityProps {
  title?: string | React.ReactElement<{}>;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProps;
  buttonStyle?: StyleProp<ViewStyle>;
  type?: ButtonType;
  shape?: 'round' | 'circle';
}

export const Button: React.FC<ButtonProps> = ({
  title = '',
  children = title,
  titleStyle = {},
  titleProps,
  buttonStyle = {},
  type = 'default',
  shape = 'round',
  ...rest
}) => {
  const [isFocus, setIsFocus] = React.useState(false);

  const modifiedStyles = React.useMemo(() => {
    const isCircleShape = shape === 'circle' ? styles.circleShape : {};

    switch (type) {
      case 'primary':
        return {
          button: {
            ...styles.button,
            backgroundColor: colors.green,
            ...isCircleShape,
          },
          title: {
            ...styles.title,
            color: colors.white,
          },
        };
      case 'link':
        return {
          button: {
            ...styles.button,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderRadius: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
          title: {
            ...styles.title,
            fontWeight: '700',
            color: colors.green,
            lineHeight: 24,
            fontFamily: fonts['Gellix-Bold'],
            borderBottomWidth: 2,
            borderBottomColor: colors.green,
            borderStyle: 'solid',
          },
        };
      case 'text':
        return {
          button: {
            ...styles.button,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderRadius: 0,
            paddingHorizontal: 0,
            paddingVertical: 0,
            ...isCircleShape,
          },
          title: {
            ...styles.title,
            color: isFocus ? colors.green : colors.black,
          },
        };
      default:
        return {
          button: {
            ...styles.button,
            ...isCircleShape,
          },
          title: {
            ...styles.title,
            color: isFocus ? colors.green : colors.black,
          },
        };
    }
  }, [isFocus, shape, type]);

  return (
    <View>
      <TouchableOpacity
        style={Object.assign(modifiedStyles.button, buttonStyle)}
        onPressIn={() => setIsFocus(true)}
        onPressOut={() => setIsFocus(false)}
        activeOpacity={0.8}
        {...rest}
      >
        {React.Children.toArray(children).map((child, index) => (
          <React.Fragment key={index}>
            {typeof child === 'string'
              ? renderNode(Text, child, {
                  style: Object.assign(
                    {
                      ...modifiedStyles.title,
                    },
                    titleStyle
                  ),
                  ...titleProps,
                })
              : child}
          </React.Fragment>
        ))}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 36,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.green,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: fonts['Gellix-Medium'],
  },
  circleShape: {
    borderRadius: 40 / 2,
    height: 40,
    width: 40,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
