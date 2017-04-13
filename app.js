// var hi = 'hello';
// console.log(hi);

var express = require('express');
var app = express();

var port = 5000;

app.get('/',function(req , res){
  res.send('Hello world');
});

app.get('/books',function(req , res){
  res.send('Hello books');
});


app.listen(port,function(err){
  console.log('running on' + port);
});
