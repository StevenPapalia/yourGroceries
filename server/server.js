const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.get('/groceries', (req, res) => {
  res.send([
    { item: "Apple", category: "Produce", price: 1.00 },
    { item: "Orange", category: "Produce", price: 1.49 },
    { item: "Squash", category: "Produce", price: 2.00 },
    { item: "Eggplant", category: "Produce", price: 5.00 },
    { item: "Feta Cheese", category: "Dairy", price: 5.00 },
    { item: "Romano Cheese", category: "Dairy", price: 9.99 },
    { item: "Mozzarella Cheese", category: "Dairy", price: 5.00 },
    { item: "Milk", category: "Dairy", price: 5.00 },
    { item: "Steak", category: "Meat", price: 14.99 },
    { item: "Fried Chicken", category: "Meat", price: 9.99 },
    { item: "Salmon", category: "Meat", price: 18.99 },
    { item: "Pork Chops", category: "Meat", price: 15.99 },
  ])
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));