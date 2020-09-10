const GridFsStream = require('gridfs-stream');
const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env.mongo_uri;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

const db = mongoose.connection;
const gfs = new GridFsStream(db, mongoose.mongo);

db.once('open', function(){
  console.log('We are connected!');
});

const beerSchema = new Schema({
    name: String,
    description: String,
    imageURL: String
})

module.exports = mongoose.model('Beers', beerSchema)
module.exports.mongoURI = mongoURI;
module.exports.gfs = gfs;