import * as React from 'react';
import CartItem from './CartItem';
import CheckOut from './CheckOut';
import { CartItemDiv, CartMargin } from './styles';

interface Props {
  cart: ({ item: string; category: string; price: number; } | number)[],
  emptyCart: () => void
}

const Cart: React.FC<Props> = ({ cart, emptyCart }) => {
  return (
    <CartMargin>
      {cart.map((item, index) => {
        return <CartItem key={index} cartItem={item} />
      })}
      <h5>Total Price: ${Number(cart.reduce((total, el) => { return Number(total) + (el[0].price * el[1]); }, 0)).toFixed(2)}</h5>
      {cart.length > 0 ? <CheckOut cart={cart} emptyCart={emptyCart} /> : <div>Your Cart Is Currently Empty</div>}
    </CartMargin>
  );
}

export default Cart;