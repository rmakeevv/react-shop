const client = require("../db");
const {ObjectId} = require("mongodb");
const db = client.db("online-store");
const myColl = db.collection("pizzaMenu");

async function addProduct(req, res) {
    const data = await req.body
    const result = await myColl.insertOne(data);
    res.send('added')
    console.log(
        `A document was inserted with the _id: ${result.insertedId}`,
    );
}

async function getProducts(req, res) {
    const result = await myColl.find();
    const data = await result.toArray()
    res.send(data)
}

async function deleteProducts(req, res) {
    const result = await  myColl.deleteMany()
    res.sendStatus(200);
}

async function getOneProduct(req, res) {
    const {_id} = await req.params
    const product = await myColl.findOne({_id : new ObjectId(_id)})
    res.send(product)
}

module.exports = {addProduct, getProducts, deleteProducts, getOneProduct}