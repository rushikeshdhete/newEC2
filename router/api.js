const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    res.send("hey this is my first EC2 deployment");
});

module.exports = router;