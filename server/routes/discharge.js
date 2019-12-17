const express = require("express")
const router = express.Router()

const mysql  = require('mysql')
const config = require("../config.js")
const conn = mysql.createConnection(config)

router.get('/', function (req, res) {
  conn.query("SELECT * FROM discharges", (err, data) => {
    if(err) throw err
    res.send(data)
  })
})

router.get('/:id', function (req, res) {
  const id = req.params.id
  conn.query("SELECT * FROM discharges WHERE id=?", [id], (err, data) => {
    if(err) throw err
    res.send(data[0])
  })
})

module.exports = router
