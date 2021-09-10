var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/file/:name', (req,res)=>{
  const name = req.params.name;
  res.sendFile(path.join(__dirname,"../public/images",name))
});

router.get('/file' , (req,res)=> {
  res.send('Send a filename');
})

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
