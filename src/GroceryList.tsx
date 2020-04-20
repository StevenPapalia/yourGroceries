import * as React from 'react';
import GroceryItem from './GroceryItem';
import { Input, GroceryWrapper, SearchSort, Sort, Search, Select, Label } from './styles';

interface Props {
  groceries: { item: string; category: string; price: number }[],
  addToCart: (grocery: { item: string; category: string; price: number; }) => void
}

const GroceryList: React.FC<Props> = ({ groceries, addToCart }) => {
  const [selected, setSelected] = React.useState<string>("All");
  const [searchForm, setSearchForm] = React.useState<string>("");

  const updateSearchForm = (e: React.ChangeEvent<HTMLInputElement>) => { setSearchForm(e.target.value); e.preventDefault(); }

  const getSelected = (e: React.ChangeEvent<HTMLSelectElement>) => { setSelected(e.target.value); e.preventDefault(); }
  
  return (
    <GroceryWrapper>
      <SearchSort>
        <Sort>
          <Label>Sort By: </Label>
          <Select value={selected} onChange={getSelected}>
            <option value="All">All</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Meat">Meat</option>
          </Select>
        </Sort>
        <Search>
          <Label>Search:</Label>
          <Input type="text" value={searchForm} onChange={updateSearchForm} placeholder="ex: steak"/>
        </Search>
      </SearchSort>
      <div>
        {groceries.filter((grocery) => { return grocery.item.toUpperCase().includes(searchForm.toUpperCase())}).map((grocery, index) => {
          return selected === "All" ? <GroceryItem key={index} grocery={grocery} addToCart={addToCart} />
          : selected === grocery.category ? <GroceryItem key={index} grocery={grocery} addToCart={addToCart} />
          : null
        })}
      </div>
    </GroceryWrapper>
  );
}

export default GroceryList;