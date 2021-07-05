var express = require('express');
var app = express();









app.get("/", (req, res) => {
    let path = __dirname + "/views/index.html";
    res.sendFile(path);
});


app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ "message": "HELLO JSON"})
    }
    else{
        res.json({"message" : "Hello json"})
    }
});


app.use("/public", express.static(__dirname + "/public"));














module.exports = app;
