const client = require("../db");
const db = client.db("online-store");
const myColl = db.collection("pizzaMenu");

async function getCategory(req, res) {
    try {
        const {category, order} = await req.params
        const result = (category === 'all')
            ? await myColl.find()
            : await myColl.find({category});
        result.sort({price: (order === 'asc' ? 1 : -1)})
        const data = await result.toArray()
        return res.send(data)
    } catch (e) {
        console.log(e.message)
    }

}

module.exports = { getCategory }