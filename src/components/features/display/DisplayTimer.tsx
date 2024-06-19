import { Box } from 'grommet';
import { FC } from 'react';

import Timer from '../../../types/Timer';
import TimerContainer from '../../style/TimerContainer';
import DisplaySection from './DisplaySection';

interface Props {
  timer: Timer;
  children?: React.ReactNode;
}
const DisplayTimer: FC<Props> = ({ timer, children }) => {
  return (
    <TimerContainer>
      <h3>{timer.title}</h3>
      <Box direction="row">
        {timer.sections.map((section) => (
          <DisplaySection key={section.id} section={section} />
        ))}
      </Box>
      {children}
    </TimerContainer>
  );
};

export default DisplayTimer;
