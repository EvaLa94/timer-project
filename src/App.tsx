import Countdown from './components/Countdown';
import Interval from './types/Interval';
import Section from './types/Section';
import Timer from './types/Timer';

import './App.css';

function App() {
  // Start -- Dummy Data
  const sec = new Section('section', 2);

  const first = new Interval('first', 1);
  const second = new Interval('second', 2);

  const sec2 = new Section('third', 1);

  sec.addInterval(first);
  sec.addInterval(second);

  sec2.addInterval(first);

  const timer = new Timer('timer');
  timer.addSection(sec);
  timer.addSection(sec2);
  // End -- Dummy Data

  return (
    <div className="App">
      <Countdown timer={timer} />
    </div>
  );
}

export default App;
