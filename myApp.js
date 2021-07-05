var express = require('express');
var app = express();
require('dotenv').config();








app.get("/", (req, res) => {
    let path = __dirname + "/views/index.html";
    res.sendFile(path);
});


if (process.env.MESSAGE_STYLE == 'uppercase') {
    app.get("/json",(req,res) => {
    res.json({"message" : "HELLO JSON"})
    })
}else{
    app.get("/json",(req,res) => {
        res.json({"message" : "Hello json"})
    })
}




app.use("/public", express.static(__dirname + "/public"));














module.exports = app;
