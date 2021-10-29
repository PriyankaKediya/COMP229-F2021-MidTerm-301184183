/*************************
  FILENAME: routes/index.js
  AUTHOR'S NAME: Priyanka Kediya
  STUDENT ID: 301184183
  WEB APP NAME: Favorite Book List App
**************************/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const books = require('../models/books');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
