import * as React from 'react';
import * as Modal from 'react-modal';
import { StripeProvider, Elements, ReactStripeElements } from 'react-stripe-elements';
import PaymentForm from './PaymentForm';
import { stripeApiKey } from './keys';

interface Props {
  toggleCheckOutFormView: () => void,
  cart: ({ item: string; category: string; price: number; }|number)[]
}

const CheckOutModal: React.FC<Props> = (props) => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

  function openModal() { setModalIsOpen(true); }
 
  function closeModal(){ setModalIsOpen(false); props.toggleCheckOutFormView(); }

  React.useEffect(() => { openModal(); }, []);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <StripeProvider apiKey={stripeApiKey}>
          <Elements>
            <PaymentForm cart={props.cart}/>
          </Elements>
        </StripeProvider>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default CheckOutModal;