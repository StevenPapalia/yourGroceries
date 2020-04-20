import * as React from 'react';
import { CartItemDiv } from './styles'

interface Props {
  key: number,
  cartItem: ({ item: string; category: string; price: number; } | number)
}

const GroceryItem: React.FC<Props> = ({ cartItem }) => {
  return (
    <CartItemDiv>
      <span>Item: {cartItem[0].item}, </span>
      <span>Category: {cartItem[0].category}, </span>
      <span>Amount: {cartItem[1]}, </span>
      <span>Total Price: ${(cartItem[0].price * cartItem[1]).toFixed(2)}</span>
    </CartItemDiv>
  );
}

export default GroceryItem;