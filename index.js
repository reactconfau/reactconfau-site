const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(request, response) {
	response.render('index')
});

app.listen(app.get('port'), function() {
	console.log('ReactConfAU is running on port', app.get('port'));
});
