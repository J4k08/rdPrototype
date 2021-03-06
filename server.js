/**
 * Created by jakobhaglof on 2017-09-22.
 */
var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');

var index       = require('./routes/index');
var rooms       = require('./routes/rooms');

var port        = 3000;

var app         = express();

//View Engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', rooms);

app.listen(3000, function() {
    console.log('yo server started' + port);
});