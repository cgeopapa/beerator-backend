const express = require('express'),
  beerController = require('./controllers/beer.controller');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const mongoURI = 'mongodb+srv://admin:admin@beerator-pfc6o.mongodb.net/beerator?retryWrites=true&w=majority';

const storage = new GridFsStorage({ url: mongoURI }); 
const upload = multer({ storage });

var app = express();
app.set('port', process.env.PORT || 8080)
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'front-end/src')));
app.use(cors());

app.get('/beers', beerController.getBeers);
app.post('/beer', upload.single('image'), beerController.addBeer);
app.delete('/beer/:beerId', beerController.removeBeer)
app.put('/beer/:beerId', beerController.updateBeer)

app.listen(app.get('port'));