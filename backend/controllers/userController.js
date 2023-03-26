const client = require("../db");
const {ObjectId} = require("mongodb");
const db = client.db("online-store");
const myColl = db.collection("users");

async function createUser(req, res) {
    const data = await req.body
    const isUser = await myColl.findOne({phone: data.phone})
    const result = isUser || await myColl.insertOne(data);
    res.send(result)
}

async function getUsers(req, res) {
    const userList = await myColl.find().toArray()
    res.send(userList)
}


module.exports = {
    createUser,
    getUsers
}