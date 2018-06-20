const Book = require("../models/book.js")
const mongoose = require("mongoose");

module.exports = function dashboardRoutes(app) {

  app.get("/admin/get-books", function(req, res) {
    Book.find({}, function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).send({
          status: false,
          msg: "Error: " + err
        });
      } else {
        res.status(200).send({status: true, msg: "Books on the way!", books: data});
      }
    })
  })

  // Adding new books to db
  app.post("/admin/add-book", function(req, res) {
    if (req.body.title !== null) {
      let newBook = new Book({
        author: req.body.author,
        title: req.body.title,
        publisher: req.body.publisher,
        language: req.body.language,
        pages: req.body.pages,
        year: req.body.year
      });

      newBook.save(function(err, result) {
        console.log(result);
        if (err) {
          console.log(err);
          res.status(500).send({
            status: false,
            msg: "Book not saved, error: " + err
          });
        } else {
          res.status(200).send({status: true, msg: "Book sucessfully saved"});
        }
      })
    }
  });

  app.delete("/admin/remove-book", function(req, res) {
  Book.findOneAndRemove({
    _id: req.body.id
  }, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).send({
        status: false,
        msg: "Book not removed, error: " + err
      });
    } else {
      res.status(200).send({status: true, msg: "Book sucessfully removed"});
    }
  })

})
}
