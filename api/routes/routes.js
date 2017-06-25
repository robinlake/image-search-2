'use strict';
module.exports = function(app) {
  var imageSearch = require('../controllers/controller.js');



// Image search routes //
app.get('/api/search/:results', imageSearch.searchResults)
  //.get(imageSearch.searchResults)

app.get('/api/recent', imageSearch.recent)
 // .get(imageSearch.recent)

};

