var express = require("express")
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.render('CV2')
})

router.get('/OK', function (req, res) {
  res.send('OK')
})
router.get('/test', function(req,res){
  res.render('CV')
})

module.exports = router