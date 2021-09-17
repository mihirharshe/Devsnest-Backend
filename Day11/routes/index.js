var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register = require('../controllers/register');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requires {email, password, confirmPassword} - req.body
 * @description
 * Security, performance and edge cases
 * level - 1
 * email validate
 * password validate
 * password == confirmPassword
 * level - 2
 * JS/ SQL injection check
 * level - 3 -> in controllers (actual logic [database connectivity])
 * check if email already exists
 * password hash
 * email to lowercase - MIHIR@gmail.com ->  mihir@gmail.com 
 * save
 */

router.post('/register', registerInitialCheck , register);

module.exports = router;
