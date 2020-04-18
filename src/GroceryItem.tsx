import * as React from 'react';

type GroceryItemProps = {
  key: number,
  grocery: { item: string; category: string; price: number },
  addToCart: (grocery: { item: string; category: string; price: number; }) => void
}

const GroceryItem = (props: GroceryItemProps) => {
  return (
    <div>
      <span>Item: {props.grocery.item}, </span>
      <span>Category: {props.grocery.category}, </span>
      <span>Price: ${props.grocery.price.toFixed(2)}, </span>
      <span><button onClick={()=>{props.addToCart(props.grocery)}}>Add To Cart </button></span>
    </div>
  );
}

export default GroceryItem;