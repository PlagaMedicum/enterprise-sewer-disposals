const express = require('express')

const port = 3100

const server = express()
const enterpriseRoutes = require('./routes/enterprise.js')
const dischargeRoutes = require('./routes/discharge.js')
const disposaleRoutes = require('./routes/disposal.js')

server.use('/enterprise', enterpriseRoutes)
server.use('/discharge', dischargeRoutes)
server.use('/disposal', disposaleRoutes)

server.get('/', (req, res) => {
  console.log("GET /")
})

server.listen(port, err => {
  if (err) throw err
  console.log(` # http://localhost:${port} is ready!`)
})
