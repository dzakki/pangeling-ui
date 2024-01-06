import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

interface AccordianToggleIconProps {
  isActive: boolean;
}
export const AccordianToggleIcon: React.FC<AccordianToggleIconProps> = ({
  isActive,
}) => {
  return (
    <Svg
      height="11"
      width="18"
      viewBox="0 0 18 11"
      fill="none"
      style={isActive ? styles.toggleActive : {}}
    >
      <Path
        d="M1.00001 0.99989L8.71814 8.71802L16.4363 0.99989"
        stroke={colors.green}
        strokeWidth="2"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  toggleActive: {
    transform: [
      { rotateX: '0deg' },
      { rotateZ: '180deg' },
      { skewX: '0deg' },
      { skewY: '0deg' },
    ],
  },
});
