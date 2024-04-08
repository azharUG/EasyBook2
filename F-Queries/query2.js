// Query 2: This query will utilize contain and aggregations to list all the activities with an age requirement of 18 or older
// This will output all the names of the activites and the country where they are located.

import { MongoClient } from 'mongodb';

const client = await MongoClient.connect('mongodb://localhost:27017/');
const coll = client.db('EasyBook').collection('Property');

// ANSWER ---------------------------------------------
const pipeline = [
  {
    $match: {
      Activities: {
        $elemMatch: {
          age_requirement: { $gte: 18 } // contain operator to find activities with age requirement of 18 or older
        }
      }
    }
  }
];
// ----------------------------------------------------

const cursor = coll.aggregate(pipeline);
const result = await cursor.toArray();

for (let i = 0; i < result.length; i++) {
  console.log(result[i].property_name + ", " + result[i].Location[0].country);
}

await client.close();
