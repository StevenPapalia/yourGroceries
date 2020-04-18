import * as React from 'react';
import Cart from './Cart';

type GoToCartProps = {
  cart: ({ item: string; category: string; price: number; }|number)[]
}

const GoToCart = (props: GoToCartProps) => {
  const [cartView, setCartView] = React.useState(false);

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