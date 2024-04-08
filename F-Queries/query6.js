// Query 6: Find activities that contain the word park in their description.

import { MongoClient } from 'mongodb';

const client = await MongoClient.connect('mongodb://localhost:27017/');
const db = client.db('EasyBook'); // Replace 'EasyBook' with your actual database name
const activityCollection = db.collection('Property'); // Assuming the collection name is 'property'

// Define the regular expression pattern to match "park" substring in activity names
const activityRegex = /park/i; // Case-insensitive search

// Define the filter to find activities that contain the word "park" in their name
const filter = {
  "property_description": { $regex: activityRegex } // Match activity names containing "park"
};

// Find activities that contain the word "park" in their name
const cursor = activityCollection.find(filter);
const result = await cursor.toArray();

console.log("Number of activities containing the word 'park' in their name:", result.length);

await client.close();
