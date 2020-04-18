import * as React from 'react';
import CartItem from './CartItem';
import CheckOut from './CheckOut';

type CartProps = {
  cart: ({ item: string; category: string; price: number; }|number)[]
}

const Cart = (props: CartProps) => {
  return (
    <div>
      {props.cart.map((item, index) => {
        return <CartItem key={index} cartItem={item} />
      })}
      <h5>Total Price: ${Number(props.cart.reduce((total, el) => { return Number(total) + (el[0].price * el[1]); }, 0)).toFixed(2)}</h5>
      {props.cart.length > 0 ? <CheckOut cart={props.cart}/> : <div>Your Cart Is Currently Empty</div>}
    </div>
  );
}

export default Cart;