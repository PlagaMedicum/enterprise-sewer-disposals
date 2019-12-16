const express = require("express");
const router = express.Router();

function routes(app){
  app.get('/', function (req, res) {
    res.send([{"id": 1}, {"id": 2}, {"id": 3}])
  })

  return router
}

module.exports = routes
