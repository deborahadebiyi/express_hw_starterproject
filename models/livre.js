const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    published: Date,
    publishedBy: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;