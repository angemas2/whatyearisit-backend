var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

/* GET users listing. */
router.get("/", (req, res)=> {
    let date = new Date();
    let year=date.getFullYear()

  res.json({ year: year+"" });
});

module.exports = router;




