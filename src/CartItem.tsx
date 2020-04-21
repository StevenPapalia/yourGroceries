import * as React from 'react';
import { CartItemDiv, GroceryItemItem, GroceryItemCategory, GroceryItemPrice, GroceryItemButtonPrice, TotalPrice } from './styles'

interface Props {
  key: number,
  cartItem: ({ item: string; category: string; price: number; } | number)
}

const GroceryItem: React.FC<Props> = ({ cartItem }) => {
  return (
    <CartItemDiv>
      <GroceryItemItem>Item: {cartItem[0].item}</GroceryItemItem>
      <GroceryItemCategory>Category: {cartItem[0].category}</GroceryItemCategory>
      <GroceryItemPrice>Amount: {cartItem[1]}</GroceryItemPrice>
      <GroceryItemButtonPrice><TotalPrice>Total Price: ${(cartItem[0].price * cartItem[1]).toFixed(2)}</TotalPrice></GroceryItemButtonPrice>
    </CartItemDiv>
  );
}

export default GroceryItem;