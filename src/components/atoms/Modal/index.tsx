import { FC, useState } from 'react';
import { addTodoFx } from '../../../models/todo';
import Portal from '../Portal';

import { Wrapper, Overlay } from './styles';

interface ModalProps {
  isOpened: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpened, onClose }) => {
  const [title, setTitle] = useState('');

  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <Wrapper>
        <Overlay onClick={onClose} />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={() => {
            addTodoFx(title);
            onClose();
          }}
        >
          add
        </button>
      </Wrapper>
    </Portal>
  );
};

export default Modal;
