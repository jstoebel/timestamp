var express = require('express')
var path = require('path')
var jade = require('jade')
var moment = require('moment')

var app = express()
app.get("/", function(req, res){
  app.set('views', "views")
  app.set('view engine', 'jade')
  res.render('main', {date: new Date().toDateString()})
})

app.get('/:timestamp', function(req, res) {


  if (isNaN(req.params.timestamp)){
    // try to parse as natural language
    d = moment(req.params.timestamp)
  } else {
    // try to parse a unix time
    d = moment(Number(req.params.timestamp))
  }

  if (d == "Invalid date"){
    var obj = {
        "unix": null,
        "natural": null
      }
  } else {
    var obj = {
        "unix": d.unix(),
        "natural": d.format('MMMM Do YYYY')
      }
  }

  res.end(JSON.stringify(obj))

})
app.listen(process.env.PORT || 3000)
