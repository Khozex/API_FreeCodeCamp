var express = require('express');
var app = express();
require('dotenv').config();




app.use((req,res,next) => {
    console.log(req.method,req.path,req.ip);
    next();
})




app.get("/", (req, res) => {
    let path = __dirname + "/views/index.html";
    res.sendFile(path);
});


app.get("/json", (req, res) => {
    let jsonResponse = { "message": "Hello json" };
    if (process.env.MESSAGE_STYLE === "uppercase") {
        jsonResponse.message = jsonResponse.message.toUpperCase();
    }

    res.json(jsonResponse);
})





app.use("/public", express.static(__dirname + "/public"));














module.exports = app;
