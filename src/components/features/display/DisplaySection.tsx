import { Box, Text } from 'grommet';
import { FC } from 'react';

import Section from '../../../types/Section';
import SectionContainer from '../../style/SectionContainer';
import DisplayInterval from './DisplayInterval';

interface Props {
  section: Section;
  children?: React.ReactNode;
}
const DisplaySection: FC<Props> = ({ section, children }) => {
  return (
    <SectionContainer
    >
      <Box justify="center">
        <Text size="xlarge">{section.repeat} x</Text>
      </Box>
      {section.intervals.map((interval) => (
        <DisplayInterval key={interval.id} interval={interval} />
      ))}
      {children}
    </SectionContainer>
  );
};

export default DisplaySection;
