require('babel-register')({
  presets: ['react', 'es2015']
})
var fs = require('fs')
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var React = require('react')
var ReactDOM = require('react-dom')
var ReactDOMServer = require('react-dom/server')
var app = express()
var mongoose = require('mongoose')
var cors = require('cors')
var PORT = process.env.PORT || 3001
var MongoClient = require('mongodb').MongoClient


// Set view engine //
app.set('view engine', 'html')
app.engine('html', function (path, options, callbacks){
  fs.readFile(path, 'utf-8', callback)
})

// Middleware //
app.use(express.static(path.join(__dirname, '../client')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

// Routes //
var routes = require('../api/routes/routes')
routes(app)

// Error handler //
app.use(function (err, req, res, next){
  res.status(err.status || 500)
})

// hey... listen! //
app.listen(PORT, function() {
	console.log('http://localhost:' + PORT)
})

// Serve app //
module.exports = app

