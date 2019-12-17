const express = require('express')
let cors = require('cors');
const bodyParser = require("body-parser")

const port = 3100

const server = express()
const enterpriseRoutes = require('./routes/enterprise.js')
const dischargeRoutes = require('./routes/discharge.js')
const drainRoutes = require('./routes/drain.js')
const substanceRoutes = require('./routes/substance.js')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors());

server.use('/enterprise', enterpriseRoutes)
server.use('/discharge', dischargeRoutes)
server.use('/drain', drainRoutes)
server.use('/substance', substanceRoutes)

server.get('/', (req, res) => {
  console.log("GET /")
})

server.listen(port, err => {
  if (err) throw err
  console.log(` # http://localhost:${port} is ready!`)
})
