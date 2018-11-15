var express = require('express');
var router = express.Router();

const users = require('../model/user.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUser', function (req, res, next) {
  users.find({id:req.query.id},{'_id':0,'__v':0}).exec(function(err,docs){
    res.send(docs);
  });  
  
});

router.get('/getAllUsers', function(req,res,next){
  users.find({},{'_id':0,'__v':0}).exec(function(err,docs){
    res.send(docs);
  });
});

router.post('/createUser', function (req, res, next) {

  users.create(req.body, function (err, saved) {
    if (err) {
      res.send(err);
    }
    res.send('saved');
  });
});

router.put('/updateUser', function (req, res, next) {
  users.update(
    {id:req.query.id},
    {fname: req.body.fname,
      lname: req.body.lname},function(err,docs){
    if(err){
      res.send(err);
    }
    res.send(docs);
  });
});

// router.update('/updateuser', function(req,res,next){

// });

module.exports = router;
