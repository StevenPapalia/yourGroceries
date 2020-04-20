import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckOutModal from './CheckOutModal';
import PaymentForm from './PaymentForm';

interface Props {
  cart: ({ item: string; category: string; price: number; } | number)[]
}

const CheckOut: React.FC<Props> = (props) => {
  const [checkOutFormView, setcheckOutFormView] = React.useState<boolean>(false);

  const toggleCheckOutFormView = () => { setcheckOutFormView(!checkOutFormView); }

  return (
    <div>
      {<button onClick={toggleCheckOutFormView}>Checkout</button>}
      {checkOutFormView ? <CheckOutModal cart={props.cart} toggleCheckOutFormView={toggleCheckOutFormView}/> : null}
    </div>
  );
}

export default CheckOut;