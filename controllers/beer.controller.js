const Beer = require('../model/beer.model');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

const storage = new GridFsStorage({ url: Beer.mongoURI }); 

const upload = multer({ storage });

exports.getBeers = function(req, res){
    Beer.find(function(err, beers){
        if(err) return console.error(err);
        beers.forEach(beer => {
            if(beer.image && beer.image.contentType === "image/jpeg" || beer.image.contentType === "image/png")
            {
                console.log("ReadStream");
                Beer.createReadStream(beer.image);
            }
        });
        res.json(beers);
    })
}

exports.addBeer = function(req, res){
    const beer = new Beer(req.body);
    beer.save(function (err, beer){
      if(err) return console.error(err);
      res.json(beer)
    });  
}

exports.removeBeer = function(req, res){
    Beer.findByIdAndDelete(req.params["beerId"], function(err){
        if(err) return console.error(err);
        return res.sendStatus(200);
    })
}

exports.updateBeer = function(req, res){
    Beer.findByIdAndUpdate(req.params["beerId"], req.body, function(err){
        if(err) return console.error(err);
        return res.sendStatus(200);
    })
}