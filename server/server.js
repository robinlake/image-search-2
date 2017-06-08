var fs = require('fs')
var express = require('express')
var path = require('path')

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

// Error handler //
app.use(function (err, req, res, next){
  res.status(err.status || 500)
})

// Serve app //
module.exports = app