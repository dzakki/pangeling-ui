import * as React from 'react';

import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { colors } from 'pangeling-ui';
import Buttons from './components/Buttons';
import Titles from './components/TItles';
import Accordians from './components/Accordians';
import Texts from './components/Texts';
import { useInitFont } from './hooks/useInitFont';

export default function App() {
  const [isLoaded] = useInitFont();

  if (!isLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Buttons />
          <Titles />
          <Accordians />
          <Texts />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...Platform.select({
      web: {
        backgroundColor: '#DCDCDC',
        alignItems: 'center',
      },
    }),
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    paddingVertical: 24,
    flex: 1,
    ...Platform.select({
      web: {
        width: 375,
        overflow: 'hidden',
      },
    }),
  },
  box: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  test: {
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
