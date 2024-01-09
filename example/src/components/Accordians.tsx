import * as React from 'react';

import { StyleSheet } from 'react-native';
import { Accordion, Box, Button } from 'pangeling-ui';

export default function Accordians() {
  return (
    <Box style={styles.box}>
      <Accordion
        sections={[
          {
            title: 'My Accordian 1',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          },
          {
            title: 'My Accordian 2',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            footer: <Button>This a button</Button>,
          },
          {
            title: 'My Accordian 3',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          },
        ]}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  box: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
});
