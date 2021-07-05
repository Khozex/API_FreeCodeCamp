var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

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
    res.json({ "echo": req.params.word });
})

app.route("/name").get((req, res) => {
    res.json({
        "name": req.query.first + " " + req.query.last
    });

}).post((req, res) => {
    res.json({
        "name" : req.body.first + " " + req.body.last
    })
})

app.use("/public", express.static(__dirname + "/public"));














module.exports = app;
