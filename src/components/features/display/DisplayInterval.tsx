import { FC } from 'react';

import Interval from '../../../types/Interval';

interface Props {
  interval: Interval;
}
const DisplayInterval: FC<Props> = ({ interval }) => {
  return (
    <div>
      <h3>Interval: {interval.title}</h3>
      <p>{interval.seconds} seconds</p>
    </div>
  );
};

export default DisplayInterval;
