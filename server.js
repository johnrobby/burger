var express = require("express");
var exphbs = require("exphbs");
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + 'public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes =  require('./ontrollers/burgers_controller.js');
app.use('/',routes);

var port = 3000;
app.listen(PORT);