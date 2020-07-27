const Beer = require('../model/beer.model');

exports.getBeers = function(req, res){
    Beer.find(function(err, beers){
        if(err) return console.error(err);
        res.json(beers);
    })
}

exports.addBeer = function(req, res){
    const beer = new Beer(req.body.beer);
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
    Beer.findByIdAndUpdate(req.params["beerId"], function(err){
        if(err) return console.error(err);
        res.json(Beer.findById(req.params["beerId"]));
    })
}
