const data = require('../config/json.data');

function route(app){
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
   
    
}

module.exports = route;