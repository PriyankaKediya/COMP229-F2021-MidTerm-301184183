/*************************
  FILENAME: models/books.js
  AUTHOR'S NAME: Priyanka Kediya
  STUDENT ID: 301184183
  WEB APP NAME: Favorite Book List App
**************************/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
