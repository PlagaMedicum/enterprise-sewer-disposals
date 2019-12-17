const express = require("express")
const router = express.Router()

const mysql  = require('mysql')
const config = require("../config.js")
const conn = mysql.createConnection(config)

router.get('/', function (req, res) {
  conn.query(`SELECT e.id AS e_id, e.name AS e_name, d.id AS d_id, d.name AS d_name FROM discharges d
                INNER JOIN enterprises_discharges ed ON ed.d_id = d.id
                INNER JOIN enterprises e ON e.id = ed.e_id`, (err, data) => {
    if(err) throw err
    res.send(data)
  })
})

router.get('/:id', function (req, res) {
  const id = req.params.id
  conn.query(`SELECT d.id, d.name, e.id AS e_id, e.name AS e_name FROM discharges d
                INNER JOIN enterprises_discharges ed ON ed.d_id = d.id
                INNER JOIN enterprises e ON e.id = ed.e_id
                WHERE d.id=?`, [id], (err, data) => {
    if(err) return console.error(err)
    res.send(data[0])
  })
})

router.post('/', function (req, res) {
  if(!req.body) return res.sendStatus(400)

  const name = req.body.name
  conn.query("INSERT INTO discharges (name) VALUES (?)", [name], (err, data) => {
    if(err) return console.error(err)
    return res.sendStatus(201)
  })
})

router.post('/:id', function (req, res) {
  if(!req.body) return res.sendStatus(400)

  const id = req.params.id
  const name = req.body.name
  conn.query("UPDATE discharges SET name=? WHERE id=?", [name, id], (err, data) => {
    if(err) return console.error(err)
    return res.sendStatus(201)
  })
})

router.delete('/:id', function (req, res) {
  const id = req.params.id
  conn.query("DELETE FROM discharges WHERE id=?", [id], (err, data) => {
    if(err) return console.error(err)
    res.sendStatus(200)
  })
})

module.exports = router
