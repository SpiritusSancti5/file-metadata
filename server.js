'use strict';

var express = require('express');
var cors = require('cors');

// var body_parse = require('body-parser');
var multer = require('multer');
var app = module.exports = express();
// app.use(body_parse.json);
app.use(cors());

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

var upload = multer({dest : 'uploads/'});

app.use(express.static(__dirname + '/views'));

app.post("/upload", upload.single('file'), function(req, res, next){
  return res.json(req.file);
});

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
