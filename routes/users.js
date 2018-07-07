var express = require('express');
var router = express.Router();
var User = require('../models/userData.model');

/* GET users listing. */
router.post('/userData', function(req, res, next) {
  var userData = new User(req.body);
  userData.save().then(item=>{
    var responseModel = {
      message:"Item saved successfully",
      note : item
    }
    res.status(200).send(responseModel);
  }).catch(err=>{
    res.status(400).send("unable to save to database");
  })

 
});

router.get('/userData',function(req,res){
    User.find({guid:req.query.guid}).sort('-date').then(function(users){
      console.log(users);
      //users.sort(users.)
      res.send(users);
    });
})


module.exports = router;
