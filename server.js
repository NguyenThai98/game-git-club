const express = require('express')
const app = express();
const PORT = 3000;
const bankRoute = require('./routers/bank_route');


var cors = require('cors')
app.use(cors())
 
// db connect
//db.connect();

// routers
app.use(bankRoute); 


app.listen(PORT, () => {
    console.log(`start sever at port http://localhost:${PORT}`);
})