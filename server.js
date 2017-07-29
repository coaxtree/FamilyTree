var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var fs = require('fs');
var login = require('./server/routes/login');
//var login = require('./routes/login.api');
var passport = require('passport');
require('./server/controllers/login/login.passport')(passport);

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8000;

app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized : false
}));
app.use(flash());

logger.token('res', function getId(res) {
 return res;
});
var accessLogStream = fs.createWriteStream(__dirname + '/server/settings/logs/access.log', {flags: 'a'});
// setup the logger
app.use(logger(':req[body] :res[body]', {stream: accessLogStream}));

app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'html');
//app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(passport.initialize());
app.use(passport.session());

// Set our api routes
//app.use('/api', api);

app.use('/', login);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

io.on('connection', (socket) => {
  console.log('new connection made');

     socket.on('send-message', (data) => {
    console.log(data.text);
    io.emit('message-received', data);
  });

});

server.listen(port, () => {
  console.log("Listening on port " + port);
});
  
module.exports = app;