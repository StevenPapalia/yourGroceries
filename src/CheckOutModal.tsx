import * as React from 'react';
import * as Modal from 'react-modal';
import { StripeProvider, Elements, ReactStripeElements } from 'react-stripe-elements';
import PaymentForm from './PaymentForm';
import { stripeApiKey } from './keys';

interface Props {
  toggleCheckOutFormView: () => void,
  emptyCart: () => void,
  cart: ({ item: string, category: string, price: number } | number)[]
}

const CheckOutModal: React.FC<Props> = ({ cart, toggleCheckOutFormView, emptyCart }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

  function openModal() { setModalIsOpen(true); }
 
  function closeModal() { setModalIsOpen(false); toggleCheckOutFormView(); }

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
            <PaymentForm cart={cart} closeModal={closeModal} emptyCart={emptyCart} />
          </Elements>
        </StripeProvider>
      </Modal>
    </div>
  );
}

export default CheckOutModal;