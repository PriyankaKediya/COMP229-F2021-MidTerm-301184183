/*************************
  FILENAME: config/db.js
  AUTHOR'S NAME: Priyanka Kediya
  STUDENT ID: 301184183
  WEB APP NAME: Favorite Book List App
**************************/

module.exports = {
  //local MongoDB deployment ->
  "LocalURI": "mongodb://localhost/FavoriteBooks",
  
  //remote MongoDB deployment ->
  "RemoteURI": process.env.RemoteURI,
  
  //hostname
  "HostName": (process.env.RemoteURI) ? "RemoteHost" : "LocalHost"

};

//remote URI Link
//"RemoteURI": "mongodb+srv://prikediya:WQRyEFkU3jRQlj1Y@cluster0.r4ccx.mongodb.net/FavoriteBooks?retryWrites=true&w=majority",
