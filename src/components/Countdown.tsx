import { FC, useEffect, useState } from 'react';

import Timer from '../types/Timer';

interface CountdownProps {
  timer: Timer;
}

const Countdown: FC<CountdownProps> = ({ timer }) => {
  const [intervals] = useState(timer.getIntervalSequence());
  const [index, setIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(
    intervals[index]?.seconds
  );

  useEffect(() => {
    if (remainingSeconds < 0) {
      setIndex((prev) => prev + 1);
      return;
    }

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingSeconds, setIndex]);

  useEffect(() => {
    if (index < intervals.length) {
      setRemainingSeconds(intervals[index].seconds);
      return;
    }
  }, [index, intervals, setRemainingSeconds]);

  return (
    <div className="countdown">
      {index < intervals.length && (
        <div>
          <div>{intervals[index].title}</div>
          <div>{remainingSeconds} seconds remaining</div>
        </div>
      )}
      {index >= intervals.length && <div>All countdowns finished!</div>}
    </div>
  );
};

export default Countdown;
