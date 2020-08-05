const express = require('express'),
  beerController = require('./controllers/beer.controller'),
  renderController = require('./controllers/render.controller');
const cors = require('cors');
const path = require('path');

var app = express();
app.set('port', process.env.PORT || 8080)
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'front-end/src')));
app.use(cors());

app.get('/', renderController.renderIndex);
app.get('/beers', beerController.getBeers);
app.post('/beer', beerController.addBeer);
app.delete('/beer/:beerId', beerController.removeBeer)
app.put('/beer/:beerId', beerController.updateBeer)

app.listen(app.get('port'));