import * as React from 'react';

import { StyleSheet } from 'react-native';
import { Title, Box } from 'pangeling-ui';

export default function Titles() {
  return (
    <Box style={styles.container}>
      <Box style={styles.box}>
        <Title>Title 1</Title>
      </Box>
      <Box style={styles.box}>
        <Title level={2}>Title 2</Title>
      </Box>
      <Box style={styles.box}>
        <Title level={3}>Title 3</Title>
      </Box>
      <Box style={styles.box}>
        <Title level={4}>Title 4</Title>
      </Box>
      <Box style={styles.box}>
        <Title level={5}>Title 5</Title>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
});
