var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    let date = new Date();

  res.send({ year: date.getFullYear() });
});

module.exports = router;
