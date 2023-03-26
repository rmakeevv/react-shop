const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017/test";

// Create a new MongoClient
const client = new MongoClient(uri);
module.exports = client;

