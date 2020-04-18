import * as React from 'react';
import { ajax } from 'jquery';
import GroceryList from './GroceryList'
import GoToCart from './GoToCart'

const App = () => {
  const [groceries, setGroceries] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  const addToCart = (grocery: { item: string; category: string; price: number; }) => {
    let newCart = [];
    let found = false;
    cart.map((g) => {
      if (g[0].item === grocery.item) { newCart.push([grocery, g[1] + 1]); found = true; }
      else { newCart.push(g); }
    });
    if (!found) { newCart.push([grocery, 1]); }
    setCart(newCart);
  }

  React.useEffect(() => {
    ajax({
      method: 'GET',
      url: '/groceries',
      success: (data) => { setGroceries(data); },
      error: (err) => { console.log(err); },
    });
  }, []);

  return (
    <div>
      <h1>Welcome to YourGroceries!</h1>
      <GoToCart cart={cart}/>
      <GroceryList groceries={groceries} addToCart={addToCart} />
    </div>
  );
}

export default App;
