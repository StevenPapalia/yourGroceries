import * as React from 'react';
import GroceryItem from './GroceryItem';

type GroceryListProps = {
  groceries: { item: string; category: string; price: number }[],
  addToCart: (grocery: { item: string; category: string; price: number; }) => void
}

const GroceryList = (props: GroceryListProps) => {
  const [selected, setSelected] = React.useState("All");
  const getSelected = (e) => { setSelected(e.target.value); e.preventDefault(); }
  return (
    <div>
      <span>Sort By:</span>
      <select value={selected} onChange={getSelected}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
      </select>
      <div>
        {props.groceries.map((grocery, index) => {
          return selected ==="All" ? <GroceryItem key={index} grocery={grocery} addToCart={props.addToCart} />
          : selected === grocery.category ? <GroceryItem key={index} grocery={grocery} addToCart={props.addToCart} />
          : null
        })}
      </div>
    </div>
  );
}

export default GroceryList;