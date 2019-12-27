var  express = require('express');
var router = express.Router();
var Department = require('./department').default;

router.post('/', function(red, res) {
   console.log(req.boby) ;
   let d = new Department ({ name: req.boby.name });
   d.save((err, dep) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(dep);
   })
})

router.get('/', function(red, res) {
    Department.find().exec((err, deps) => {
         if (err)
             res.status(500).send(err);
         else
             res.status(200).send(deps);
    })
})

module.exports = router;