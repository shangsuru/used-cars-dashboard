const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const scrape = require("./public/scrape.js");
const Car = require("./models/car");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/ebay", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.static(path.join(__dirname, "public")));

const PORT = 3050;
app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});

// setInterval(() => {
//   Car.remove({}).then(scrape());
// }, 86400000); 
scrape();

module.exports = app;
