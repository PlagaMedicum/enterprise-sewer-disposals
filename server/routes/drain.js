const express = require("express")
const router = express.Router()

const mysql  = require('mysql')
const config = require("../config.js")
const conn = mysql.createConnection(config)

router.get('/', function (req, res) {
  conn.query(`SELECT dd.drain_id, cl.date, s.name AS s_name, cl.concentration AS c_l, n.coefficient, dd.dis_id, dc.concentration AS b_c FROM discharges_drains dd
                INNER JOIN concentration_limits cl ON dd.dis_id = cl.d_id
                INNER JOIN substances s ON s.id = cl.s_id
                INNER JOIN discharges_substances ds ON ds.d_id = cl.d_id AND ds.s_id = cl.s_id
                INNER JOIN nonconservativity n ON n.s_id = s.id AND n.d_id = cl.d_id AND n.date = cl.date
                INNER JOIN drain_concentrations dc ON dc.s_id = s.id AND dc.d_id = cl.d_id AND dc.date = cl.date`, (err, data) => {
    if(err) return console.error(err)
    res.send(data)
  })
})

module.exports = router
