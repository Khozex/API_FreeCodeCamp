var express = require('express');
var app = express();









app.get("/", (req, res) => {
    let path = __dirname + "/views/index.html";
    res.sendFile(path);
});



app.use("/public",express.static(__dirname + "/public"));














module.exports = app;
