const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import the models
const User = require('./models/User'); // Assuming you have User.js in the same directory
const Property = require('./models/Property'); // Assuming you have Property.js
const Payment = require('./models/Payment'); // Assuming you have Payment.js

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/easyBook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB..."))
.catch(err => console.error("Could not connect to MongoDB...", err));

// Routes
// Users
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get('/users', async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
});

app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: 'User deleted' });
});

// Properties
app.post('/properties', async (req, res) => {
  const property = new Property(req.body);
  await property.save();
  res.send(property);
});

// Add GET, PUT, DELETE for Properties similar to Users...

// Payments
app.post('/payments', async (req, res) => {
  const payment = new Payment(req.body);
  await payment.save();
  res.send(payment);
});

// Add GET, PUT, DELETE for Payments similar to Users...

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
