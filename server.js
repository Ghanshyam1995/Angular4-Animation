var express = require("express");
var bodyParser = require("body-parser");
var index = require("./routes/index");
var path = require("path");
var mongoose = require("mongoose");
mongoose.connect('localhost/MeanStack');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', index);
app.use('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'public/Index.html'));
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});