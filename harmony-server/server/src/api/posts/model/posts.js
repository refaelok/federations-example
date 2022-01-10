var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostsSchema = new Schema({
	id: Number,
	title: String,
	categories: String,
	content: String
});

module.exports = mongoose.model('Posts', PostsSchema);