const express = require('express');
const path = require('path');
const app = express();
const client = require('./db')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const cors = require('cors')

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(cors())
app.use('/products', router)
async function start() {
    await client.connect()
        .then(() => console.log('db connected'))
        .catch(e => console.log(e.message))
    app.listen(5000)
}

start().then(() => console.log('server is running')).catch(e => console.log(e.message))