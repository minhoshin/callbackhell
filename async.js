const express = require("express");
const app = express();

app.get("/", async(req, res) => {
    res.send("async success");
    console.log("async success");
});

app.listen(3000, () => {
    console.log("express 3000 port");
});