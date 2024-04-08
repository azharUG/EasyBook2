// Query 3: COMPLEX SEARCH CRITERIA. This query will list all the properties that match the following criteria:
// activities that either have an age requirement of 18 or older and belong to a specific city, or have a total cost less than 1300 and the status payed. 

import { MongoClient } from 'mongodb';

const client = await MongoClient.connect('mongodb://localhost:27017/');
const db = client.db('EasyBook');

const propertyColl = db.collection('Property');

// ANSWER ---------------------------------------------
const filter = {
  $or: [
    {
      $and: [
        { "Activities.age_requirement": { $gte: 18 } }, // Age requirement of 18 or older
        { "Location.city": "Boston" } // Activities in Boston
      ]
    },
    {
      $and: [
        { "Payment.total_cost": { $lt: 1300 } }, // Total cost less than 1300
        { "Payment.status": "paid" } // status is payed
      ]
    }
  ]
};
// ----------------------------------------------------

// Find properties that match the filter
const cursor = propertyColl.find(filter);
const result = await cursor.toArray();

console.log(result);

await client.close();
