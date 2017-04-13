// var hi = 'hello';
// console.log(hi);

var express = require('express');
var app = express();

var port = 5000;
app.listen(port,function(err){
  console.log('running on' + port);
})
