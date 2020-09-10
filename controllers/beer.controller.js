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
    const image = req.files.image;
    let ret;
    cloudinary.uploader.upload(image.tempFilePath, function(err, result){
        if(err) return console.error(err);
        beer.imageURL = result.url;
        beer.save(function (err, beer){
            if(err) return console.error(err);
            res.json(beer);
        });  
    });
}

exports.removeBeer = function(req, res){
    Beer.findByIdAndDelete(req.params["beerId"], function(err){
        if(err) return console.error(err);
        
        const public_id = getIDfromURL(req.params["imageURL"])

        cloudinary.uploader.destroy(public_id, function(err, result){
            if(err) return console.error(err);
            return res.sendStatus(200);
        });
    })
}

exports.updateBeer = function(req, res){
    Beer.findByIdAndUpdate(req.params["beerId"], req.body, function(err){
        if(err) return console.error(err);
        return res.sendStatus(200);
    })
}

function getIDfromURL(url){
    let public_id = url;
    public_id = public_id.substring(public_id.lastIndexOf('/') + 1);
    public_id = public_id.substring(0, public_id.lastIndexOf('.'));

    return public_id;
}