import type { TextStyle } from 'react-native';
import { fonts } from '../../themes';

export const getFontFamily = (fontWeight?: TextStyle['fontWeight']) => {
  switch (fontWeight) {
    case 'bold':
    case '700':
      return fonts['Gellix-Bold'];
    case '800':
      return fonts['Gellix-ExtraBold'];
    case '900':
      return fonts['Gellix-ExtraBold'];
    case '500':
      return fonts['Gellix-Medium'];
    case '600':
      return fonts['Gellix-SemiBold'];
    case '300':
      return fonts['Gellix-Light'];
    case '200':
    case '100':
      return fonts['Gellix-Thin'];
    default:
      return fonts['Gellix-Regular'];
  }
};
