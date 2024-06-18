import { FC, useState } from 'react';

import Section from '../../../types/Section';
import Timer from '../../../types/Timer';
import NewInterval from './NewInterval';

interface Props {
  parentTimer: Timer;
}
const NewSection: FC<Props> = ({ parentTimer }) => {
  const [title, setTitle] = useState('');
  const [repeat, setRepeat] = useState(0);
  const [sections, setSections] = useState(parentTimer.sections);

  const onClick = () => {
    const newSection = new Section(title, repeat);
    parentTimer.addSection(newSection);
    setSections([...parentTimer.sections]);
  };
  return (
    <div>
      {sections.map((section) => (
        <>
          <p>Title: {section.title}</p>
          <p>Repeat: {section.repeat}</p>
          <NewInterval parentSection={section} />
        </>
      ))}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Section</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          value={repeat}
          min={0}
          onChange={(e) => setRepeat(+e.target.value)}
        />
        <button onClick={onClick}>+</button>
      </form>
    </div>
  );
};

export default NewSection;
