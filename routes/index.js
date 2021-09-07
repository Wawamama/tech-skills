var express = require('express');
var router = express.Router();
const devs = require('./../models/devModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { devs });
});

router.get('/:username', (req, res, next) => {
  const username = req.params.username
  res.render('user', { username, devs })
})

module.exports = router;
