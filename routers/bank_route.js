const express = require('express');
const router = express.Router();

const data = require('../config/json.data');

router.post("/payment/mainte", (req, res) => {
    res.json(data.dataPaymentMainte)
})
router.get("/payment/banks/hit", (req, res) => {
    res.json(data.dataPaymentBanksHit);
})

router.post("/payment/bcp", (req, res) => {
    res.json(data.dataPaymentBcp);
})
router.get("/payment/smart/banks_avaiable", (req, res) => {
    console.log(req.query.xtoken);
    res.json(data.dataPaymentSmart);
})

module.exports = router;