var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello Section2')
})
 
console.log("Starting on port 4200")
app.listen(4200)