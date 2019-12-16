const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    const enterpriseRoutes = require('./routes/enterprise.js')
    const dischargeRoutes = require('./routes/discharge.js')
    const disposaleRoutes = require('./routes/disposal.js')

    server.use('/enterprise', enterpriseRoutes)
    server.use('/discharge', dischargeRoutes)
    server.use('/disposal', disposaleRoutes)

    server.get("*", (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(` # http://localhost:${port} is ready!`)
    })
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
