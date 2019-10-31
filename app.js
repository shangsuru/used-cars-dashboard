const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const path = require('path')
const routes = require('./routes/routes')
const scrape = require('./public/scrape.js')
const Car = require('./models/car')

require('dotenv').config()

mongoose.Promise = global.Promise
"mongodb://admin:admin123@ds241688.mlab.com:41688/heroku_56pbblnw", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(cors())
routes(app)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log('Running on port ' + PORT)
})

setInterval(() => {
  Car.remove({}).then(scrape())
}, 86400000)

module.exports = app
