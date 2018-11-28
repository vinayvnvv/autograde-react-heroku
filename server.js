var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var http = require('http').Server(app);
var path = require('path');
var port = (process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, '/build')));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/build/index.html');
});

 http.listen(port, function(){
				   console.log('listening on :' + port);
				});