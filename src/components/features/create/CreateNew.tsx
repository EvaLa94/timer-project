import { FC } from 'react';

import Modal from '../../commons/Modal';
import NewTimer from './NewTimer';

const CreateNew: FC = () => {
  return (
    <div>
      <Modal buttonTxt="Add new Timer">
        <NewTimer />
      </Modal>
    </div>
  );
};

export default CreateNew;
