var express = require('express'),
  app = express();

var PORT = process.env.PORT || 8000;

app.listen(PORT, function(){
  console.log('Up and running on: %s', PORT);
});

//SERVE FILES DIRs
app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/views"));
app.use(express.static(__dirname + "/public/controllers"));
app.use(express.static(__dirname + "/public/views/partials"));
app.use('/bower_components', express.static(__dirname + "/bower_components"));
app.use(express.static(__dirname + "/bower_components"));

//frontend routes =========================================================
app.get('*', function(req, res) {
  res.send('./public/views/index.html'); // load public/index.html file
});
