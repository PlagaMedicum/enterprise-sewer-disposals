const express = require("express")
const router = express.Router()

const mysql  = require('mysql')
const config = require("../config.js")
const conn = mysql.createConnection(config)

router.get('/', function (req, res) {
  const date = req.query.date
  conn.query(`SELECT e.id, e.name, bc.date, s.name AS s_name FROM enterprises e
                INNER JOIN enterprises_discharges ed ON e.id = ed.e_id
                INNER JOIN background_concentrations bc ON bc.d_id = ed.d_id
                INNER JOIN substances s ON s.id = bc.s_id
                WHERE bc.date = ?
                GROUP BY e.id, bc.date, s.name`, [date], (err, data) => {
    if(err) return console.error(err)
    res.send(data)
  })
})

router.get('/:id', function (req, res) {
  const id = req.params.id
  conn.query("SELECT * FROM enterprises WHERE id=?", [id], (err, data) => {
    if(err) return console.error(err)
    res.send(data[0])
  })
})

router.post('/', function (req, res) {
  if(!req.body) return res.sendStatus(400)

  const name = req.body.name
  conn.query("INSERT INTO enterprises (name) VALUES (?)", [name], (err, data) => {
    if(err) return console.error(err)
    return res.sendStatus(201)
  })
})

router.post('/:id', function (req, res) {
  if(!req.body) return res.sendStatus(400)

  const id = req.params.id
  const name = req.body.name
  conn.query("UPDATE enterprises SET name=? WHERE id=?", [name, id], (err, data) => {
    if(err) return console.error(err)
    return res.sendStatus(201)
  })
})

router.delete('/:id', function (req, res) {
  const id = req.params.id
  conn.query("DELETE FROM enterprises WHERE id=?", [id], (err, data) => {
    if(err) return console.error(err)
    res.sendStatus(200)
  })
})

module.exports = router
