const app = require("./server.js") 
const mongodb = require("mongodb") 
const ReviewsDAO = require("./dao/peopleDAO.js") 
require('dotenv').config();

const MongoClient = mongodb.MongoClient
const mongo_username = process.env.MONGO_USER;
const mongo_password = process.env.MONGO_PASS;

// connecting db
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.esjzl8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const port = 3000;

MongoClient.connect(
  uri,
  {
    maxPoolSize: 50, //capacity of user handling
    wtimeoutMS: 2500,//timeout duration
    // useNewUrlParser: true
  }
).catch(err => {
  console.error(err.stack);
  process.exit(1);
}).then(async client => {
  await ReviewsDAO.injectDB(client)
  app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
  })
})