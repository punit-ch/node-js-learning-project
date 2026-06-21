const express = require("express");

const app = express();

app.use(express.json());

app.post("/user", (req, res) => {

    console.log(req.body);

    res.send("Received");

});

app.listen(3000);