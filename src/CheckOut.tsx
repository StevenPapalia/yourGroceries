import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckOutModal from './CheckOutModal';
import { ActionButton } from './styles';

interface Props {
  emptyCart: () => void,
  cart: ({ item: string; category: string; price: number; } | number)[]
}

const CheckOut: React.FC<Props> = ({ cart, emptyCart }) => {
  const [checkOutFormView, setcheckOutFormView] = React.useState<boolean>(false);

  const toggleCheckOutFormView = () => { setcheckOutFormView(!checkOutFormView); }

  return (
    <div>
      {<ActionButton onClick={toggleCheckOutFormView}>Checkout</ActionButton>}
      {checkOutFormView ? <CheckOutModal cart={cart} toggleCheckOutFormView={toggleCheckOutFormView} emptyCart={emptyCart}/> : null}
    </div>
  );
}

export default CheckOut;