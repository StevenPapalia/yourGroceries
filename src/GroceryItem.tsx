import * as React from 'react';
import { GroceryItemDiv, AddToCartButton, GroceryItemItem, GroceryItemCategory, GroceryItemPrice, GroceryItemButtonPrice } from './styles';

interface Props {
  key: number,
  grocery: { item: string; category: string; price: number },
  addToCart: (grocery: { item: string; category: string; price: number; }) => void
}

const GroceryItem: React.FC<Props> = ({ grocery, addToCart }) => {
  const { item, category, price } = grocery;
  return (
    <GroceryItemDiv>
      <GroceryItemItem>Item: {item}</GroceryItemItem>
      <GroceryItemCategory>Category: {category}</GroceryItemCategory>
      <GroceryItemPrice>Price: ${price.toFixed(2)} </GroceryItemPrice>
      <GroceryItemButtonPrice><AddToCartButton onClick={()=>{addToCart(grocery)}}>Add To Cart</AddToCartButton></GroceryItemButtonPrice>
    </GroceryItemDiv>
  );
}

export default GroceryItem;