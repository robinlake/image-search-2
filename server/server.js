require('babel-register')({
  presets: ['react']
})
var fs = require('fs')
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var React = require('react')
var ReactDOM = require('react-dom')
var ReactDOMServer = require('react-dom/server')


var app = express()

// Imports //
var indexRoutes = require('./routes/index')
var sampleProp = {sample: 'this is some sample text'}

// Set view engine //
app.set('view engine', 'html')
app.engine('html', function (path, options, callbacks){
  fs.readFile(path, 'utf-8', callback)
})

// Middleware //
app.use(express.static(path.join(__dirname, '../client')))
app.use(bodyParser.urlencoded({extended: true}))


// Routes //
app.use('/', indexRoutes)


// Process results of form submission
app.post('/client', function(req,res){

  res.render('index', {search: req.body.search})
})

// Error handler //
app.use(function (err, req, res, next){
  res.status(err.status || 500)
})

// Serve app //
module.exports = app