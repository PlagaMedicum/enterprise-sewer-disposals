const express = require('express')

const port = 3100

const server = express()
const enterpriseRoutes = require('./routes/enterprise.js')
const dischargeRoutes = require('./routes/discharge.js')
const disposaleRoutes = require('./routes/disposal.js')

server.use('/api/enterprise', enterpriseRoutes)
server.use('/api/discharge', dischargeRoutes)
server.use('/api/disposal', disposaleRoutes)

server.get('/', (req, res) => {
  res.send("sas")
})

server.listen(port, err => {
  if (err) throw err
  console.log(` # http://localhost:${port} is ready!`)
})
