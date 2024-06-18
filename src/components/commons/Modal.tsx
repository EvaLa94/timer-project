import { FC, useEffect, useRef, useState } from 'react';

interface Props {
  buttonTxt: string;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: FC<Props> = ({ buttonTxt, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (isModalOpen) {
      modalElement!.showModal();
    } else {
      modalElement!.close();
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={() => setModalOpen(true)}>{buttonTxt}</button>
      <dialog ref={modalRef}>
        {children}
        <button className="modal-close-btn" onClick={handleCloseModal}>
          Close
        </button>
      </dialog>
    </>
  );
};

export default Modal;
