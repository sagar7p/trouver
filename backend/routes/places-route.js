const router = require("express").Router();
const Place = require("../models/Place");
const cors = require("cors");

/**
 * URL: localhost:5001/api/places?userId="userId"
 * Response: Array of all Place
 */
router.get("/", cors(), (req, res, next) => {
  const { userId } = req.query;
  Place.find({ userId: userId }, (err, places) => {
    if (err) next(err);
    else res.json(places.sort((a, b) => a.dateCreated < b.dateCreated));
  });
});
router.options("/", cors());

/**
 * URL: localhost:5001/api/places?placeId="placeId"
 * Response: Deletes places and responds with array of deleted places
 */
router.delete("/", cors(), (req, res, next) => {
  const { placeId } = req.query;
  Place.delete({ _id: id }, (err, places) => {
    if (err) next(err);
    else res.json(places);
  });
});

/**
 * URL: localhost:5001/api/places/add
 * Sample payload as part of body: 
{
    "name": "hello",
    "userId": "mailId",
    "image": {
        "url": "http://abcdef.com",
        "height": 200,
        "width": 200
    },
    "coordinates": {
        "latitude": 153.6,
        "longitude": 146.4
    }
}
 * Response: Newly added place object if successful
 */
router.post("/add", cors(), (req, res, next) => {
  const {
    name,
    userId,
    image,
    coordinates: { latitude, longitude },
  } = req.body;
  const newPlace = new Place({
    name,
    userId,
    dateCreated: new Date(),
    image,
    location: {
      type: "Point",
      coordinates: [latitude, longitude],
    },
  });
  res.setHeader("Access-Control-Allow-Origin", "*");
  newPlace.save((err) => {
    if (err) next(err);
    else
      res.json({
        newPlace,
        msg: "place successfully saved!",
      });
  });
});

/**
 * Handles option call for CORS if preflight is enabled
 */
router.options("/add", cors());

/**
 * URL: localhost:5001/api/places/
 * Description: Deletes all Places from DB
 */
router.delete("/", (req, res, next) => {
  Place.deleteMany({}, (err) => {
    if (err) next(err);
    else res.send("Successfully deleted all places");
  });
});

module.exports = router;
