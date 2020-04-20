import * as React from 'react';
import { ajax } from 'jquery';
import GroceryList from './GroceryList'
import GoToCart from './GoToCart'
import { Header, Wrapper } from './styles';

const App: React.FC = () => {
  const [groceries, setGroceries] = React.useState<{ item: string, category: string, price: number }[]>([]);
  const [cart, setCart] = React.useState<({ item: string, category: string, price: number } | number)[]>([]);

  const addToCart = (grocery: { item: string, category: string, price: number }) => {
    let newCart = [];
    let found = false;
    cart.map((g) => {
      if (g[0].item === grocery.item) { newCart.push([grocery, g[1] + 1]); found = true; }
      else { newCart.push(g); }
    });
    if (!found) { newCart.push([grocery, 1]); }
    setCart(newCart);
  }

  const emptyCart = () => { setCart([]); }

  React.useEffect(() => {
    ajax({
      method: 'GET',
      url: '/groceries',
      success: (data: { item: string, category: string, price: number }[]) => { setGroceries(data); },
      error: (err: JQuery.jqXHR<any>) => { console.log(err); },
    });
  }, []);

  return (
    <div>
      <Header>Welcome to yourgroceries.com</Header>
      <Wrapper>
        <GroceryList groceries={groceries} addToCart={addToCart} />
        <GoToCart cart={cart} emptyCart={emptyCart} />
      </Wrapper>
    </div>
  );
}

export default App;
