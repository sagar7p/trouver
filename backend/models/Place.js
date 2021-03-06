const mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema({
    userId: String,
    name: String,
    dateCreated: String,
    image: {
        url: String,
        height: Number,
        width: Number
    },
    location: {
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    }
});

// This is the actual model used to interact with the DB!!!
const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
