import { FC, useState } from 'react';

import Timer from '../../../types/Timer';
import { useTimer } from '../../context/TimerContext';
import NewSection from './NewSection';

const NewTimer: FC = () => {
  const [title, setTitle] = useState('');
  const [currentTimer, setCurrentTimer] = useState<Timer>();
  const { timers, setTimers } = useTimer();

  const onClick = () => {
    const newTimer = new Timer(title);
    setCurrentTimer(newTimer);
    setTimers([...timers, newTimer]);
  };
  return (
    <div>
      {currentTimer ? (
        <div>
          <h3>{currentTimer.title}</h3>
          <NewSection parentTimer={currentTimer} />
        </div>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="timer-title">Timer</label>
          <input
            id="timer-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={onClick}>+</button>
        </form>
      )}
    </div>
  );
};

export default NewTimer;
