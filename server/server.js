const express = require("express");
const stripeLoader = require("stripe");
const path = require("path");
const bodyParser = require("body-parser");
const { connection } = require('../database/config');
const  { stripeApiSecretKey } = require('./keys');

const app = express();
const port = 3000;

const jsonParser = bodyParser.json();

app.use(express.static(path.resolve(__dirname, '../dist/')));
app.use(express.json());

app.get('/groceries', (req, res) => {
  connection.query("SELECT * FROM groceries", (error, results) => {
    if (error) { res.sendStatus(500); throw error; }
    else res.send(results);
  });
});

const stripe = new stripeLoader(stripeApiSecretKey);

const charge = (token, amt) => {
  return stripe.charges.create({
    amount: Number((amt * 100).toFixed(2)),
    currency: 'usd',
    source: token,
    description: 'grocery purchase', 
  });
}

app.post('/purchase', jsonParser, async (req, res, next) => {
  try {
    let data = await charge(req.body.token.id, req.body.amount);
    res.send(data.receipt_url);
  } catch(err) { console.log(err); res.status(500); }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));