const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://admin:admin@beerator-pfc6o.mongodb.net/beerator?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
const db = mongoose.connection;
db.once('open', function(){
  console.log('We are connected!');
});

const beerSchema = new Schema({
    name: String,
    description: String,

    // image: Image
})

module.exports = mongoose.model('Beers', beerSchema)