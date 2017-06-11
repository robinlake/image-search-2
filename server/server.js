var fs = require('fs')
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

// Imports //
var indexRoutes = require('./routes/index')

// Set view engine //
app.set('view engine', 'html')
app.engine('html', function (path, options, callbacks){
  fs.readFile(path, 'utf-8', callback)
})

// Middleware //
app.use(express.static(path.join(__dirname, '../client')))

// Routes //
app.use('/', indexRoutes)

// Process results of form submission
app.post('/formResults', function(req,res){
  res.send('you have submitted a form')
})

// Error handler //
app.use(function (err, req, res, next){
  res.status(err.status || 500)
})

// Serve app //
module.exports = app