import { FC, useState } from 'react';

import Interval from '../../../types/Interval';
import Section from '../../../types/Section';

interface Props {
  parentSection: Section;
}
const NewInterval: FC<Props> = ({ parentSection }) => {
  const [title, setTitle] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [intervals, setIntervals] = useState(parentSection.intervals);

  const onClick = () => {
    const newInterval = new Interval(title, seconds);
    parentSection.addInterval(newInterval);
    setIntervals([...parentSection.intervals]);
  };
  return (
    <div>
      {intervals.map((interval) => (
        <>
          <p>Title: {interval.title}</p>
          <p>Seconds: {interval.seconds}</p>
        </>
      ))}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Interval</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          value={seconds}
          min={0}
          onChange={(e) => setSeconds(+e.target.value)}
        />
        <button onClick={onClick}>+</button>
      </form>
    </div>
  );
};

export default NewInterval;
