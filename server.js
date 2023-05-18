const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./config/db.config');
const route = require('./routers');
// db connect
//db.connect();

// routers
route(app);
app.get("/", (req, res) => {
  res.json({});
})
app.listen(PORT, () => {
    console.log(`start sever at port http://localhost:${PORT}`);
})