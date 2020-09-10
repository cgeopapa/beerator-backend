const express = require('express'),
  beerController = require('./controllers/beer.controller');
const cors = require('cors');
const path = require('path');
const fileupload = require('express-fileupload');

var app = express();
app.set('port', process.env.PORT || 8080)
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'front-end/src')));
app.use(cors());
app.use(fileupload({
  useTempFiles: true
}));

app.get('/beers', beerController.getBeers);
app.post('/beer', beerController.addBeer);
app.delete('/beer/:beerId', beerController.removeBeer)
app.put('/beer/:beerId', beerController.updateBeer)

app.listen(app.get('port'));