// Payment.js
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  payment_id: Number,
  total_cost: Number,
  payment_status: String,
  confirmation_code: String,
  Crypto: [{
    crypto_id: String,
    crypto_name: String,
    crypto_address: String
  }],
  PayPal: [{
    paypal_id: String,
    paypal_name: String,
    paypal_email: String
  }],
  Visa: [{ // If there are Visa payments, add this based on the data structure found
    card_number: String,
    cardholder_name: String,
    security_code: String,
    expiration_date: String,
    Visa_id: String
  }]
});

module.exports = mongoose.model('Payment', PaymentSchema);
