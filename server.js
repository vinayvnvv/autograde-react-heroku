var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var http = require('http').Server(app);
var path = require('path');
var port = (process.env.PORT || 4008);


app.use('/', express.static(path.join(__dirname, 'auto-grade-landing/')));
app.use('/', express.static(path.join(__dirname, 'build/')));






app.get('/', function(req, res){
  // res.sendFile(__dirname + '/auto-grade-landing/index.html');
  res.json("hello")
});

app.get('/login', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});
app.get('/app/', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});
app.get('/app/*', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});





 http.listen(port, function(){
				   console.log('listening on :' + port);
				});