const User = require("../models/user.js");
const mongoose = require("mongoose");

module.exports = function loginRoutes(app) {

  app.post("/register", function(req, res) {
    let newUser = new User({email: req.body.email, password: req.body.password})

    newUser.save(function(err, result) {
      console.log(result);
      if (err) {
        console.log(err);
        res.status(500).send({
          status: false,
          msg: "Registration failed, error: " + err
        });
      } else {
        res.status(200).send({status: true, msg: "Registration sucessfull"});
      }
    })
  }
)

}
