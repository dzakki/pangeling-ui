import { useFonts } from 'expo-font';

export const useInitFont = () => {
  return useFonts({
    'Gellix-Black': require('../../assets/fonts/Gellix-Black.ttf'),
    'Gellix-Bold': require('../../assets/fonts/Gellix-Bold.ttf'),
    'Gellix-ExtraBold': require('../../assets/fonts/Gellix-ExtraBold.ttf'),
    'Gellix-Light': require('../../assets/fonts/Gellix-Light.ttf'),
    'Gellix-Medium': require('../../assets/fonts/Gellix-Medium.ttf'),
    'Gellix-Regular': require('../../assets/fonts/Gellix-Regular.ttf'),
    'Gellix-SemiBold': require('../../assets/fonts/Gellix-SemiBold.ttf'),
    'Gellix-Thin': require('../../assets/fonts/Gellix-Thin.ttf'),
  });
};
