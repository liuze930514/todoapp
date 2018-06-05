const express = require("express");

const todoController = require("./controller/todoController");

const app = express();

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));









todoController(app);

const port = 3333;
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("服务器启动成功，地址:http://localhost:" + port);
})