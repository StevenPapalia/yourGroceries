import * as React from 'react';
import CheckOutModal from './CheckOutModal';

interface Props {
  cart: ({ item: string; category: string; price: number; }|number)[]
}

const CheckOut: React.FC<Props> = (props) => {
  const [checkOutFormView, setcheckOutFormView] = React.useState<boolean>(false);

  const toggleCheckOutFormView = () => { setcheckOutFormView(!checkOutFormView); }

  return (
    <div>
      {<button onClick={toggleCheckOutFormView}>Checkout</button>}
      {checkOutFormView ? <CheckOutModal toggleCheckOutFormView={toggleCheckOutFormView}/> : null}
    </div>
  );
}

export default CheckOut;