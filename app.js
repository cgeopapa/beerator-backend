const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@beerator-pfc6o.mongodb.net/beerator?retryWrites=true&w=majority')
const db = mongoose.connection;
db.once('open', function(){
  console.log('We are connected!');
});

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

app.post('/beer', function(req, res){
  res.render('index');
});

app.listen(8080);