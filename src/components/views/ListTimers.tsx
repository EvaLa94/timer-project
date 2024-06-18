import { FC } from 'react';

import { useTimer } from '../context/TimerContext';
import DisplayTimer from '../features/display/DisplayTimer';

const ListTimers: FC = () => {
  const { timers } = useTimer();
  return (
    <div>
      {timers.map((timer) => (
        <DisplayTimer timer={timer} />
      ))}
    </div>
  );
};

export default ListTimers;
