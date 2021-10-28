var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if ('x' in req.query & req.query.x != ''){
    var x = req.query.x;
  }
  else{
    var x = Math.cbrt(Math.random()*10000);
  }

  res.render('computation',{
    result:`Math.cbrt applied to ${Math.ceil(x)} is ${x}`
  })
});

module.exports = router;
