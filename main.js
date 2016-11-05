var express = require('express')
var app = express()

app.get('/:timestamp', function(req, res) {

  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var d = new Date(Number(req.params.timestamp))

  var unixTime = d.getTime()
  if (isNaN(unixTime)){
    // invalid date!
    var obj = {
      "unix": null,
      "natural": null
    }
  } else {
    // valid date
    //  (example: January 1, 2016)
    var obj = {
      "unix": unixTime,
      "natural": `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
    }
  }

  res.end(JSON.stringify(obj))
  // res.end('Hello World!')
})
app.listen(3000)
