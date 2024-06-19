import { FC } from 'react';

import Interval from '../../../types/Interval';
import IntervalContainer from '../../style/IntervalContainer';

interface Props {
  interval: Interval;
  children?: React.ReactNode;
}
const DisplayInterval: FC<Props> = ({ interval, children }) => {
  return (
    <IntervalContainer>
      <h3>{interval.title}</h3>
      <p>{interval.seconds} seconds</p>
      {children}
    </IntervalContainer>
  );
};

export default DisplayInterval;
