import { FC } from 'react';

import Timer from '../../../types/Timer';

interface Props {
  timer: Timer;
}
const DisplayTimer: FC<Props> = ({ timer }) => {
  return (
    <div>
      <h2>{timer.title}</h2>
      {timer.sections.map((section) => (
        <p>{section.title}</p>
      ))}
    </div>
  );
};

export default DisplayTimer;
