const express = require('express');
const app = express();
const cors = require('cors');

const databaseURL = 'mongodb://localhost:27017';

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect(databaseURL, { useUnifiedTopology: true })
 .then((client) => {
    const db = client.db('login');
    const usersCollection = db.collection('users');
    const userRouter = createRouter(usersCollection);
    app.use('/api/users', userRouter);
 })
 .catch(console.err);

 app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });