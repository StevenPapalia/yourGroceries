import * as React from 'react';
import Cart from './Cart';

interface Props {
  cart: ({ item: string; category: string; price: number; } | number)[]
}

const GoToCart: React.FC<Props> = (props) => {
  const [cartView, setCartView] = React.useState<boolean>(false);

  const toggleCartView = () => { setCartView(!cartView); }

  return (
    <div style={{position: "fixed", right: "50px", top: "50px"}}>
      <button onClick={toggleCartView}>
        {!cartView ? "Show Cart" : "Hide Cart"} ({props.cart.reduce((total, item) => { return total + item[1]; }, 0)} items)
      </button>
      {cartView ? <Cart cart={props.cart}/> : null}
    </div>
  );
}

export default GoToCart;