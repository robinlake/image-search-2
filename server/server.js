var fs = require('fs')
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

// var React = require('react')
// var ReactDOM = require('react-dom')
// var ReactDOMServer = require('react-dom/server')
// var Component = require('../client/components/recent.js')
// require('babel-register')({
//   presets: ['react']
// })

var app = express()

// Parse form responses //
app.use(bodyParser.urlencoded({extended: true}))

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
app.post('/client', function(req,res){
  res.send('index')
})

// Error handler //
app.use(function (err, req, res, next){
  res.status(err.status || 500)
})

// Serve app //
module.exports = app