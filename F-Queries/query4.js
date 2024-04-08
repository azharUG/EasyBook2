// Query 4: This query will count the number of people that payed with visa

import { MongoClient } from 'mongodb';

const client = await MongoClient.connect('mongodb://localhost:27017/');
const db = client.db('EasyBook');
const collection = db.collection('Payment');

// ANSWER ---------------------------------------------
// Define the filter to match documents where payment was made with Visa and payment status is "payed"
const filter = {
  "Visa": { $exists: true },
  "payment_status": "paid"
};

// Use aggregation to count the number of people who paid with Visa
const pipeline = [
  {
    $match: filter
  },
  {
    $group: {
      _id: "$payment_id",
      count: { $sum: 1 }
    }
  }
];
// ----------------------------------------------------

// Execute the aggregation pipeline
const result = await collection.aggregate(pipeline).toArray();

console.log("Number of people who paid with Visa:", result.length);

await client.close();
