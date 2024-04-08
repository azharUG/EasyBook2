// User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_id: Number,
  username: String,
  UserPreference: [{
    preference_id: String,
    budget: Number,
    weather: String,
    arrival_preference: String,
    departure_preference: String,
    urbanity: String
  }],
  Plan: [{
    plan_id: String,
    plan_name: String,
    cost: Number
  }],
  Booking: [{
    booking_id: String,
    arrival_date: Date,
    departure_date: Date
  }],
  Review: [{
    rating_id: String,
    rating_type: String,
    rating_value: Number,
    rating_date: Date
  }]
});

module.exports = mongoose.model('User', UserSchema);
