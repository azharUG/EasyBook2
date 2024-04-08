// Query 1: This query will list all the amount of activities with an age requirement of 18 or older

import { MongoClient } from 'mongodb';

// -----ANSWER---------------------------------------------
const filter = {
    "UserPreference.budget": { $lt: 1200 },
    "UserPreference.urbanity": "urban"
  };
// --------------------------------------------------------

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('EasyBook').collection('User');
const cursor = coll.find(filter);
const result = await cursor.toArray();

console.log(result.length); 

await client.close();