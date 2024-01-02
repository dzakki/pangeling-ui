import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { HelloWorld } from 'pangeling-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
