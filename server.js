const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./config/db.config');
const route = require('./routers');

const data = require('./config/json.data');

// db connect
//db.connect();

// routers
route(app);
app.get("/", (req, res) => {
  res.json(data.dataPaymentMainte)
})
app.post("/payment/mainte", (req, res) => {
  res.json(data.dataPaymentMainte)
})
app.get("/payment/banks/hit", (req, res) => {
  res.json(data.dataPaymentBanksHit);
})

app.post("/payment/bcp", (req, res) => {
  res.json(data.dataPaymentBcp);
})
app.get("/payment/smart/banks_avaiable", (req, res) => {
  console.log(req.query.xtoken);
  res.json(data.dataPaymentSmart);
})
app.listen(PORT, () => {
    console.log(`start sever at port http://localhost:${PORT}`);
})