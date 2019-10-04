const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
const routes = require("./routes/routes");
const scrape = require("./public/scrape.js");
const Car = require("./models/car");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/ebay", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
routes(app);

const PORT = 3050;
app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});

setInterval(() => {
  Car.remove({}).then(scrape());
}, 86400000);

module.exports = app;
