const express = require("express")
const router = express.Router()

const mysql  = require('mysql')
const config = require("../config.js")
const conn = mysql.createConnection(config)

router.get('/', function (req, res) {
  const id = req.query.id
  conn.query(`SELECT s.id, s.name, bc.date, bc.concentration FROM substances s
                INNER JOIN discharges_substances ds ON s.id = ds.s_id
                INNER JOIN background_concentrations bc ON bc.d_id = ds.d_id AND bc.s_id = s.id
                WHERE ds.d_id=?`, [id], (err, data) => {
    if(err) return console.error(err)
    res.send(data)
  })
})

module.exports = router
