import * as React from 'react';
import { CartItemDiv } from './styles'

interface Props {
  key: number,
  cartItem: ({ item: string; category: string; price: number; } | number)
}

const GroceryItem: React.FC<Props> = (props) => {
  return (
    <CartItemDiv>
      <span>Item: {props.cartItem[0].item}, </span>
      <span>Category: {props.cartItem[0].category}, </span>
      <span>Amount: {props.cartItem[1]}, </span>
      <span>Total Price: ${(props.cartItem[0].price * props.cartItem[1]).toFixed(2)}</span>
    </CartItemDiv>
  );
}

export default GroceryItem;