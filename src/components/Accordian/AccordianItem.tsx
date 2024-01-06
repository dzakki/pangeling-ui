import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Title } from '../Title';
import { Text } from '../Text';
import { colors } from '../../themes';
import { Box } from '../Box';
import { AccordianToggleIcon } from './AccordianToggleIcon';
import { Button } from '../Button';
import renderNode from '../../utilities/render-node';

export interface AccordionItemProps {
  title: string;
  description?: string;
  content?: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
  content = '',
  children = content,
}) => {
  const [active, setActive] = React.useState(false);

  return (
    <Box style={styles.container}>
      <Button
        type="text"
        style={styles.header}
        onPress={() => setActive((prev) => !prev)}
      >
        <Box style={styles.headerContent}>
          <Title level={3}>{title}</Title>
          {!!description && (
            <Text style={styles.description}>{description}</Text>
          )}
        </Box>
        <Box style={styles.toggleIcon}>
          <AccordianToggleIcon isActive={active} />
        </Box>
      </Button>

      <Box style={[styles.content, { display: active ? 'flex' : 'none' }]}>
        {typeof children === 'string'
          ? renderNode(Text, children, {})
          : children}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.brokenWhite,
    borderStyle: 'solid',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    display: 'flex',
    width: '100%',
  },
  headerContent: {
    flexShrink: 1,
  },
  description: {
    marginTop: 10,
  },
  toggleIcon: {
    // flex: 1,
    paddingTop: 8,
  },
  content: {
    paddingTop: 16,
  },
});
