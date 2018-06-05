var bodyParser = require("body-parser");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo");

var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model("Todo", todoSchema);

var urlencodeParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  app.get("/todo", function(req, res, next) {
    Todo.find({}, function(err, data) {
      if (err) {
        throw err;
      }
      res.render("todo", { todos: data });
    });
  });

  app.post("/todo", urlencodeParser, function(req, res, next) {
    Todo(req.body).save(function(err, data) {
      if (err) {
        throw err;
      }
      res.json(data);
    });
  });

  app.delete("/todo/:item", function(req, res, next) {
    // console.log(req.params.item);
    Todo.find({ item: req.params.item }).remove(function(err, data) {
      if (err) {
        throw err;
      }
      res.json(data);
    });
  });
};
