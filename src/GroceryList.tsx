import * as React from 'react';
import GroceryItem from './GroceryItem';

interface Props {
  groceries: { item: string; category: string; price: number }[],
  addToCart: (grocery: { item: string; category: string; price: number; }) => void
}

const GroceryList: React.FC<Props> = (props) => {
  const [selected, setSelected] = React.useState<string>("All");
  const [searchForm, setSearchForm] = React.useState<string>("");

  const updateSearchForm = (e) => { setSearchForm(e.target.value); e.preventDefault(); }

  const getSelected = (e) => { setSelected(e.target.value); e.preventDefault(); }
  
  return (
    <div>
      <span>Sort By: </span>
      <select value={selected} onChange={getSelected}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
      </select>
      <span>Search: <input type="text" value={searchForm} onChange={updateSearchForm}/></span>
      <div>
        {props.groceries.filter((grocery) => { return grocery.item.toUpperCase().includes(searchForm.toUpperCase())}).map((grocery, index) => {
          return selected === "All" ? <GroceryItem key={index} grocery={grocery} addToCart={props.addToCart} />
          : selected === grocery.category ? <GroceryItem key={index} grocery={grocery} addToCart={props.addToCart} />
          : null
        })}
      </div>
    </div>
  );
}

export default GroceryList;