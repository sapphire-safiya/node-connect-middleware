var connect = require('connect');
var serveStatic = require('serve-static');
var cookieParser = require('cookie-parser');

//importing middlewares
var helloWorld = require('./hello_world');
var createError = require('./errorCreator');
var saveRequest = require('./save_Request');
var writeHeader = require('./writeHeader');
var replyText = require('./replyText');
var errorHandler = require('./errorHandler');

var app = connect();

//For Serving static files.
//It will serve the files available at public folder otherwise pass the control to next middleware
app.use(serveStatic(__dirname+'/public'));

/*
For Throwing custom error to test Error Handler
app.use(createError());*/

//For parsing Cookies it will populate req.cookies
app.use(cookieParser());

app.use(saveRequest(__dirname+'/requests'));
app.use(writeHeader('X-Powered-By','Node'));
app.use(replyText('Hello Brother!'));
app.use(errorHandler(__dirname+'/error-log'));

app.listen(8080);

