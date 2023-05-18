const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./config/db.config');
const bankRoute = require('./routers/bank_route');

 
// db connect
//db.connect();

// routers
app.use(bankRoute); 
app.listen(PORT, () => {
    console.log(`start sever at port http://localhost:${PORT}`);
})