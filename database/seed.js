const { connection } = require('./config.js');

const dataArray = [
  { item: "Apple", category: "Produce", price: 1.00 },
  { item: "Orange", category: "Produce", price: 1.49 },
  { item: "Squash", category: "Produce", price: 2.00 },
  { item: "Eggplant", category: "Produce", price: 5.00 },
  { item: "Feta Cheese", category: "Dairy", price: 5.00 },
  { item: "Romano Cheese", category: "Dairy", price: 9.99 },
  { item: "Mozzarella Cheese", category: "Dairy", price: 5.00 },
  { item: "Milk", category: "Dairy", price: 5.00 },
  { item: "Ribeye", category: "Meat", price: 14.99 },
  { item: "Fried Chicken", category: "Meat", price: 9.99 },
  { item: "Salmon", category: "Meat", price: 18.99 },
  { item: "Pork Chops", category: "Meat", price: 15.99 },
  { item: "GrapeFruit", category: "Produce", price: 1.50 },
  { item: "Lemon", category: "Produce", price: 0.49 },
  { item: "Lime", category: "Produce", price: 0.19 },
  { item: "Asparagus", category: "Produce", price: 5.00 },
  { item: "Cheddar Cheese", category: "Dairy", price: 6.00 },
  { item: "Vanilla Ice Cream", category: "Dairy", price: 6.99 },
  { item: "Chocolate Ice Cream", category: "Dairy", price: 9.00 },
  { item: "Whip Cream", category: "Dairy", price: 5.00 },
  { item: "Chicken Breast", category: "Meat", price: 3.99 },
  { item: "Swordfish", category: "Meat", price: 20.99 },
  { item: "Lamb Chops", category: "Meat", price: 13.99 },
  { item: "Flank Steak", category: "Meat", price: 15.99 },
];

for (let i = 0; i < dataArray.length; i++) {
  const grocery = { item: dataArray[i].item, category: dataArray[i].category, price: dataArray[i].price };
  connection.query('INSERT INTO groceries SET ?', grocery, (error) => { if (error) throw error; });
}