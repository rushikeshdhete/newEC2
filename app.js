const express = require("express");
const PORT = 5001;
const router = require("./router/api");
const app = express();

app.use(router);


app.listen(PORT, (req, res)=>{
    console.log(`listining to PORT ${PORT}`);
});