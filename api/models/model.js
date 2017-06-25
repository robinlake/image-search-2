var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SearchSchema = new Schema({
  searchVal: String,
  searchDate: Date
},
{timestamps: true}
)

const ModelClass = mongoose.model('searchTerm', SearchSchema)


module.exports = ModelClass

