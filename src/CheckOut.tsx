import * as React from 'react';
import CheckOutModal from './CheckOutModal';

type CheckOutProps = {
  cart: ({ item: string; category: string; price: number; }|number)[]
}

const CheckOut = (props: CheckOutProps) => {
  const [checkOutFormView, setcheckOutFormView] = React.useState(false);

  const toggleCheckOutFormView = () => { setcheckOutFormView(!checkOutFormView); }

  return (
    <div>
      {<button onClick={toggleCheckOutFormView}>Checkout</button>}
      {checkOutFormView ? <CheckOutModal toggleCheckOutFormView={toggleCheckOutFormView}/> : null}
    </div>
  );
}

export default CheckOut;