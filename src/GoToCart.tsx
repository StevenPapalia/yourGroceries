import * as React from 'react';
import Cart from './Cart';
import { CartWrapper } from './styles';

interface Props {
  cart: ({ item: string; category: string; price: number; } | number)[],
  emptyCart: () => void
}

const GoToCart: React.FC<Props> = ({ cart, emptyCart }) => {
  const [cartView, setCartView] = React.useState<boolean>(false);

  const toggleCartView = () => { setCartView(!cartView); }

  return (
    <CartWrapper>
      <button onClick={toggleCartView}>
        {!cartView ? "Show Cart" : "Hide Cart"} ({cart.reduce((total, item) => { return total + item[1]; }, 0)} items)
      </button>
      {cartView ? <Cart cart={cart} emptyCart={emptyCart}/> : null}
    </CartWrapper>
  );
}

export default GoToCart;