'use strict';

var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bing = require('node-bing-api')({accKey: 'a7447de2ae8e49fa8499b0cb12dbca03'})
var searchTerm = require('../models/model')
var bodyParser = require('body-parser')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/searchTerms')


app.use(bodyParser.json())

// Show search results //
exports.searchResults = function(req, res, next) {
  var searchVal = req.params.results
  var foo = req.params
  var {offset} = req.query 

  var data = new searchTerm({
    searchVal,
    searchDate: new Date()
  })

  console.log(searchVal)

  data.save(err => {
    if(err){
      res.send('Error saving to database')
    }
  })
var pageStart = offset
var countSkip = offset -1

  if(offset > 0){
  bing.images(searchVal, {
    top: (10 * pageStart),
    skip: (10 * countSkip)
  }, function(error, rez, body){
    var bingData=[]

    for(var i=0; i<10; i++){
      bingData.push({
        url: body.value[i].webSearchUrl,
        snippet: body.value[i].name,
        thumbnail: body.value[i].thumbnailUrl,
        context: body.value[i].hostPageDisplayUrl
      })
    }
    res.json(bingData)
  })
  } else {
    res.json('offset must be at least 1')
  }
}

exports.recent = (req, res, next) => {
  searchTerm.find({},{"searchVal": 1, "id": 1}, (err, data)=>{
    res.json(data)
  })
  //res.json({"recent search results": "here are some recent search results"})
}
