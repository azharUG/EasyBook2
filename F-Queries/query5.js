// Query 5: This query will get a specific user that prefers "sunny" weather, then we will count the amount of 
// activities that involve swimming or diving.  This way he will know how many options he has to choose from. 
// COUNTING DOCUMENTS FOR A SPECIFIC USER

import { MongoClient } from 'mongodb';

const client = await MongoClient.connect('mongodb://localhost:27017/');
const db = client.db('EasyBook');
const userCollection = db.collection('User');
const propertyCollection = db.collection('Property');

const userFilter = {
  "user_id": 6, // This specific user
};

const user = await userCollection.findOne(userFilter);

if (user) {
  const activityRegex = /swim|divi/i;

  // Define the filter to count the activities that involve swimming or diving
  const activityFilter = {
    "Activities.activity_name": { $regex: activityRegex } // Match activity names containing "swim" or "dive"
  };

  // Count the activities that involve swimming or diving
  const activityCount = await propertyCollection.countDocuments(activityFilter);

  console.log("Number of activities involving swimming or diving:", activityCount);
} else {
  console.log("No user found with user ID 6 and preference for 'sunny' weather.");
}

await client.close();
