const { MongoClient, ServerApiVersion } = require('mongodb');
const password = encodeURIComponent("EFihZ76nDYEaqMQy")
const uri = `mongodb+srv://rmakeevv:${password}@cluster0.g2wn3u9.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test")
//     // perform actions on the collection object
//     client.close();
// });

module.exports = client