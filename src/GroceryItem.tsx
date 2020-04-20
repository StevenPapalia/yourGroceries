import * as React from 'react';
import { GroceryItemDiv } from './styles';

interface Props {
  key: number,
  grocery: { item: string; category: string; price: number },
  addToCart: (grocery: { item: string; category: string; price: number; }) => void
}

const GroceryItem: React.FC<Props> = ({ grocery, addToCart }) => {
  const { item, category, price } = grocery;
  return (
    <GroceryItemDiv>
      <span>Item: {item}, </span>
      <span>Category: {category}, </span>
      <span>Price: ${price.toFixed(2)} </span>
      <span><button onClick={()=>{addToCart(grocery)}}>Add To Cart </button></span>
    </GroceryItemDiv>
  );
}

export default GroceryItem;