const express = require("express");
const path = require("path");
const { connection } = require('../database/config');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.get('/groceries', (req, res) => {
  connection.query("SELECT * FROM groceries", (error, results) => {
    if (error) { res.sendStatus(500); throw error; }
    else res.send(results);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));