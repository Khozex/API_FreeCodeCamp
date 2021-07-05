var express = require('express');
var app = express();
require('dotenv').config();




app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
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

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({
        "time": req.time
    })
}
)

app.get("/:word/echo", (req, res) => {
    res.json({"echo" : req.params.word});
})




app.use("/public", express.static(__dirname + "/public"));














module.exports = app;
