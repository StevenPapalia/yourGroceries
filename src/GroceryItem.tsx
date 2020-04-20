import * as React from 'react';
import { GroceryItemDiv, AddToCartButton } from './styles';

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
      <span><AddToCartButton onClick={()=>{addToCart(grocery)}}>Add To Cart </AddToCartButton></span>
    </GroceryItemDiv>
  );
}

export default GroceryItem;