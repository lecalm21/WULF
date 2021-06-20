var express = require('express');
var router = express.Router();

var probefahrt = require("../libs/hpkwconverter");

/* GET hp */
router.get('/', function(req, res, next) {
  let hp = req.query.hp;
  let kw = probefahrt.convertHptoKW(hp);
  res.status(200).json({kw: kw});
});

module.exports = router;
/*
var express = require('express');
var router = express.Router();

var hptoKWConverter = require("../libs/hpkwconverter");

/* GET hp */
/*
router.get('/', function(req, res, next) {
  let hp = req.query.hp;
  let kw = hptoKWConverter.convertHptoKW(hp);
  res.status(200).json({kw: kw});
});

module.exports = router;
*/