const express = require("express");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");

const app = express();

// Replace with your mongoLab URI
const MONGO_URI =
  "mongodb://username:password@ds117625.mlab.com:17625/lyrical-db";
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}
mongoose.connect(MONGO_URI);

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

module.exports = app;