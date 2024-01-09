import * as React from 'react';

import { StyleSheet } from 'react-native';
import { Button, Box, colors } from 'pangeling-ui';
import { BookIcon, BurgerIcon } from './Icons';
export default function Buttons() {
  return (
    <Box style={styles.container}>
      <Box style={styles.box}>
        <Button title="Default" type="default" />
      </Box>
      <Box style={styles.box}>
        <Button title="Primary" type="primary" />
      </Box>

      <Box style={styles.box}>
        <Button title="Button Text" type="text" />
      </Box>

      <Box style={styles.box}>
        <Button title="Link" type="link" />
      </Box>

      <Box style={styles.box}>
        <Button type="primary" shape="circle">
          <BurgerIcon />
        </Button>
      </Box>

      <Box style={styles.box}>
        <Button type="text">
          <BookIcon />
        </Button>
      </Box>

      <Box style={[styles.box, { marginBottom: 60 }]}>
        <Button
          style={{ backgroundColor: colors.darkGreen }}
          title="with style"
          type="primary"
        />
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
    marginVertical: 16,
  },
});
