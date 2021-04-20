const express = require("express");
const app = express();
const { readFile } = require("fs");

const port = 3005;

app.get("/", (req, res) => {
    readFile("./index.html", "utf8", (err, html) => {
        res.send(html);
    });
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`);
});