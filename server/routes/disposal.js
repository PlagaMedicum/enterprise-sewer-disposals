const express = require("express")
const router = express.Router()

const mysql  = require('mysql')
const config = require("../config.js")
const conn = mysql.createConnection(config)

router.get('/', function (req, res) {
  conn.query("SELECT * FROM disposals", (err, data) => {
    if(err) throw err
    res.send(data)
  })
})

module.exports = router
