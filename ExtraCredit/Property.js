// Property.js
const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  property_id: Number,
  property_name: String,
  property_description: String,
  Location: [{
    location_id: String,
    country: String,
    city: String,
    Neighbourhood: [{
      neighbourhood_name: String,
      neighbourhood_description: String
    }]
  }],
  Activities: [{
    activity_id: String,
    activity_name: String,
    activity_description: String,
    age_requirement: Number,
    Amenities: [{
      amenity_id: String,
      amenity_name: String,
      amenity_description: String
    }],
    Photos: [{
      photo_id: String,
      photo_name: String,
      url: String
    }]
  }]
});

module.exports = mongoose.model('Property', PropertySchema);
