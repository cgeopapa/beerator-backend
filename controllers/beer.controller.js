const Beer = require('../model/beer.model');

const dotenv = require('dotenv');
dotenv.config();

const cloudinary = require('cloudinary').v2
    cloudinary.config({
      cloud_name: process.env.cloud_name,
      api_key: process.env.api_key,
      api_secret: process.env.api_secret
    })

exports.getBeers = function(req, res){
    Beer.find(function(err, beers){
        if(err) return console.error(err);
        res.json(beers);
    })
}

exports.addBeer = function(req, res){
    const beer = new Beer(req.body);
    const image = req.files.image;
    cloudinary.uploader.upload(image.tempFilePath, function(err, result){
        if(err) return console.error(err);
        beer.imageURL = result.url;
        beer.save(function (err, beer){
            if(err) return console.error(err);
            console.log(beer);
            res.json(beer);
        });  
    });
}

exports.removeBeer = function(req, res){
    Beer.findByIdAndDelete(req.params["beerId"], function(err){
        if(err) return console.error(err);
        
        const public_id = getIDfromURL(req.body.imageURL);

        cloudinary.uploader.destroy(public_id, function(err, result){
            if(err) return console.error(err);
            return res.sendStatus(200);
        });
    })
}

exports.updateBeer = function(req, res){
    let beer = req.body;
    if(req.files)
    {
        cloudinary.uploader.destroy(getIDfromURL(beer.imageURL));
        cloudinary.uploader.upload(req.files.image.tempFilePath, function(err, result){
            if(err) return console.error(err);
            beer.imageURL = result.url;
            Beer.findByIdAndUpdate(req.params["beerId"], beer, function(err, beerNew){
                if(err) return console.error(err);
                return res.json(beerNew);
            })  
        });
    }
    else
    {
        Beer.findByIdAndUpdate(beer._id, beer, function(err, beerNew){
            if(err) return console.error(err);
            return res.json(beerNew);
        })
    }
}

function getIDfromURL(url){
    let public_id = url;
    public_id = public_id.substring(public_id.lastIndexOf('/') + 1);
    public_id = public_id.substring(0, public_id.lastIndexOf('.'));

    return public_id;
}