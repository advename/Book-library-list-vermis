const Book = require("../models/book.js")
const mongoose = require("mongoose");

module.exports = function dashboardRoutes(app){

  app.post("/admin/add-book" , function(req,res){
    if(req.body.title !== null){
      let newBook = new Book({
        author: req.body.author,
        title: req.body.title,
        publisher: req.body.publisher,
        language: req.body.language,
        pages: req.body.pages,
        year: req.body.year
      });

      newBook.save(function(err,result){
        if(err){
          console.log(err);
        }
        else{
           res.status(200).send({status: "Book successfully added"});
        }
      })
    }
  });
}
