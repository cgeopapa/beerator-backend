const beerSchema = new mongoose.Schema({
    name: String,
    description: String,

    bitterness: Number,
    taste_intensity: Number,
    foam_intensity: Number,
    co2_feel: Number

    // image: Image
})

const beerModel = mongoose.model('Beers', beerSchema)