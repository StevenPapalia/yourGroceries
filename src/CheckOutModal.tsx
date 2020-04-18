import * as React from 'react';
import * as Modal from 'react-modal';

type CheckOutModalProps = {
  toggleCheckOutFormView: () => void
}

const CheckOutModal = (props: CheckOutModalProps) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
 
  function closeModal(){
    setModalIsOpen(false);
    props.toggleCheckOutFormView();
  }

  React.useEffect(() => {
    openModal();
  }, []);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}

export default CheckOutModal;