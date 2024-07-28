const express= require("express");
const cors=require("cors");
const people= require("./api/people.route.js"); 

const app = express();

// middle ware
app.use(cors())
app.use(express.json())

app.use("/api/people", people)

app.use("*", (req, res) =>
  res.status(404).json({ error: "not yeah found" }))

module.exports= app;