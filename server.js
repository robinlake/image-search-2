var path = require('path')
var fs = require('fs')
var express = require('express')

var app = express()

// Set view engine
app.set('view engine', 'html')
app.engine('html', function (path, options, callbacks){
  fs.readFile(path, 'utf-8', callback)
})

