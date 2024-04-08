// Query 7: This query updates the "payment_status" attribute of a specific payment document, marking it as paid if it was previously unpaid, and vice versa.
// updating a document based on a query parameter (e.g. flipping on or off a boolean attribute for a document, such as enabling/disabling a song

import { MongoClient } from 'mongodb';

const client = await MongoClient.connect('mongodb://localhost:27017/');
const db = client.db('EasyBook'); // Replace 'EasyBook' with your actual database name
const paymentCollection = db.collection('Payment'); // Assuming the collection name is 'payment'

// Define the query parameter (e.g., payment ID) for the document to update
const queryParameter = { "payment_id": 4 }; // Replace with the ID of the payment to update

// Find the payment document based on the query parameter
const payment = await paymentCollection.findOne(queryParameter);

if (payment) {
  // Toggle the boolean attribute (e.g., 'payment_status') by flipping its value
  const updatedAttributeValue = payment.payment_status === "paid" ? "failed" : "paid";

  // Update the document with the new attribute value
  const updateResult = await paymentCollection.updateOne(
    queryParameter,
    { $set: { "payment_status": updatedAttributeValue } }
  );

  if (updateResult.modifiedCount === 1) {
    console.log(`Payment with ID ${queryParameter.payment_id} has been ${updatedAttributeValue === "paid" ? 'marked as paid' : 'marked as failed'}.`);
  } else {
    console.log(`Failed to update payment with ID ${queryParameter.payment_id}.`);
  }
} else {
  console.log(`Payment with ID ${queryParameter.payment_id} not found.`);
}

await client.close();
