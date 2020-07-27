const express = require('express'),
  beerController = require('./controllers/beer.controller'),
  renderController = require('./controllers/render.controller');

var app = express();
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080)
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get('/', renderController.renderIndex);
app.get('/beers', beerController.getBeers);
app.post('/beer', beerController.addBeer);
app.delete('/beer/:beerId', beerController.removeBeer)

app.listen(app.get('port'));