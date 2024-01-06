import * as React from 'react';
import { AccordionItem, type AccordionItemProps } from './AccordianItem';

export interface AccordionProps {
  sections: Array<AccordionItemProps>;
}

export const Accordion: React.FC<AccordionProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => (
        <AccordionItem key={index} {...section} />
      ))}
    </>
  );
};
