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
var MongoClient = require('mongodb').MongoClient
require('../client/components/header.js')
require('../client/components/content.js')

// Set view engine //
app.set('view engine', 'html')
app.engine('html', function (path, options, callbacks){
  fs.readFile(path, 'utf-8', callback)
})




// Middleware //
app.use(express.static(path.join(__dirname, '../client')))
app.use(bodyParser.urlencoded({extended: true}))

// Process results of form submission
// app.post('/', function(req,res){

//   var search = req.body.search
//   var numberOfResults = req.body.numberOfResults
//   console.log(search, numberOfResults)
//   MongoClient.connect("mongodb://admin:12345@ds119380.mlab.com:19380/imagesearch", function(err, db) {
//   if(!err) {
//     console.log("We are connected");
//   }
//   })
//   // var root = res.render('../client/index', function(err, html){
//   //   res.send(html)
//   //})
//   var markup = React.renderToString(Content())
//   res.render( '/',{markup: markup})
// })

// Error handler //
app.use(function (err, req, res, next){
  res.status(err.status || 500)
})

// hey... listen! //
var PORT = 3001
app.listen(PORT, function() {
	console.log('http://localhost:' + PORT)
})

// Serve app //
module.exports = app

