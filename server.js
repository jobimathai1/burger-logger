var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));


// override with POST having ?_method=
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


//Routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
	console.log('App listening on PORT ', app.get('port'));
});
